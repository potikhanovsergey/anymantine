import PageTitle from "../layout/PageTitle"
import { Anchor, Button, ButtonProps, Loader, Stack, Text } from "@mantine/core"
import { IconDownload } from "@tabler/icons-react"
import PageSubtitle from "../layout/PageSubtitle"
import { DesignSystem } from "src/state/design-system"
import { useSelector } from "@legendapp/state/react"
import dynamic from "next/dynamic"

const CodeHighlight = dynamic(
  () => import("@mantine/code-highlight").then((m) => m.CodeHighlight),
  {
    ssr: false,
    loading: () => <Loader size="sm" p={24} />,
  }
)

const themeUsageCode = `import { MantineProvider } from "@mantine/core";
import theme from "[path-to-theme]";

const ThemeUsageSnippet = () => {
  return (
    <MantineProvider theme={theme}>
      {/* your app here */}
    </MantineProvider>
  )
}
`

const DownloadButton = (props: ButtonProps) => {
  const DesignSystemLabel = useSelector(DesignSystem.label)
  const fileName = `${DesignSystemLabel}-theme.zip`

  const downloadArchive = async () => {
    const response = await fetch(`/api/theme?theme=${DesignSystemLabel}`, { method: "GET" })
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${DesignSystemLabel}.zip`)
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <Button onClick={downloadArchive} leftSection={<IconDownload size={16} />} {...props}>
      Download {fileName}
    </Button>
  )
}

const UsagePage = () => {
  const DesignSystemLabel = useSelector(DesignSystem.label)
  return (
    <>
      <PageTitle>Usage</PageTitle>
      <Stack gap="sm" align="flex-start">
        <Text maw={700}>
          Anymantine is a collection of themes for Mantine. To start using themes, you must first{" "}
          <Anchor target="_blank" href="https://mantine.dev/pages/getting-started/">
            install the Mantine library.
          </Anchor>
        </Text>
        <Text maw={700} mb="xl">
          Mantine comes with a great design by default. However, if you want your theme to look
          different, but still want to use all the features of the library, you can customize the
          theme by{" "}
          <Anchor target="_blank" href="https://mantine.dev/theming/theme-object/">
            passing the theme object to MantineProvider.
          </Anchor>
        </Text>
        <div>
          <PageSubtitle mb={0}>Download theme</PageSubtitle>
          <Text maw={700} mb="xs">
            The theme is stored in index.tsx file which imports additional files to customize
            components
          </Text>
          <DownloadButton mb="md" />
          <Text mb="xs">You can later use it like this:</Text>
          <CodeHighlight code={themeUsageCode} language="tsx" />
        </div>
      </Stack>
    </>
  )
}

export default UsagePage
