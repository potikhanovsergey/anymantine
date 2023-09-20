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

const DownloadButton = (props: ButtonProps) => {
  const DesignSystemLabel = useSelector(DesignSystem.label)
  const fileName = `${DesignSystemLabel}Theme.tsx`
  return (
    <Button
      component="a"
      download={fileName}
      href={`/themes/${DesignSystemLabel}/index.tsx`}
      leftSection={<IconDownload size={16} />}
      {...props}
    >
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
          Anymantine is a collection of themes for Mantine (a.k.a. the most profound UI components
          library for React). To start using themes, you must first{" "}
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
          <PageSubtitle mb={0}>Theme file</PageSubtitle>
          <Text maw={700} mb="xs">
            Theme is stored in a single file which exports the theme object for MantineProvider.
          </Text>
          <DownloadButton mb="md" />
          <Text mb="xs">You can later use it like this:</Text>
          <CodeHighlight
            code={`import { MantineProvider } from "@mantine/core";
import bubbleTheme from "[path-to-downloaded-file]/${DesignSystemLabel}Theme";

const ThemeUsageSnippet = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={bubbleTheme}>
      {/* your app here */}
    </MantineProvider>
  )
}
`}
            language="tsx"
          />
        </div>
      </Stack>
    </>
  )
}

export default UsagePage
