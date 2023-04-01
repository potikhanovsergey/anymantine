import Link from "src/core/components/atoms/Link"
import PageTitle from "../layout/PageTitle"
import { Button, Stack, Text } from "@mantine/core"
import { IconDownload } from "@tabler/icons-react"
import PageSubtitle from "../layout/PageSubtitle"
import mock from "src/mocks/themeStringMock"
import { Prism } from "@mantine/prism"

const UsagePage = () => {
  return (
    <>
      <PageTitle>Usage</PageTitle>
      <Stack spacing="sm" align="flex-start">
        <Text maw={700}>
          Anymantine is a collection of themes for Mantine (a.k.a. the most profound UI components
          library for React). To start using themes, you must first{" "}
          <Link target="_blank" href="https://mantine.dev/pages/getting-started/">
            install the Mantine library.
          </Link>
        </Text>
        <Text maw={700}>
          Mantine comes with a great design by default. However, if you want your theme to look
          different, but still want to use all the features of the library, you can customize the
          theme by{" "}
          <Link target="_blank" href="https://mantine.dev/theming/theme-object/">
            passing the theme object to MantineProvider.
          </Link>
        </Text>
        <div>
          <PageSubtitle mb={0}>Theme file</PageSubtitle>
          <Text maw={700} mb="xs">
            Theme is stored in a single file which exports the theme object for MantineProvider.
          </Text>
          <Button mb="xs" leftIcon={<IconDownload size={16} />}>
            Download theme file
          </Button>
          <Text mb="xs">You can later use it like this:</Text>
          <Prism language="tsx">
            {`import { MantineProvider } from "@mantine/core";
import bubbleTheme from "[path-to-downloaded-file]/bubbleTheme.ts";
 
const ThemeUsageSnippet = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={bubbleTheme}>
      {/* your app here */}
    </MantineProvider>
  )
}
`}
          </Prism>
        </div>
      </Stack>
    </>
  )
}

export default UsagePage
