import { Anchor, Loader, Text } from "@mantine/core"
import dynamic from "next/dynamic"
import PageTitle from "src/design-system/layout/PageTitle"

const CodeHighlightTabs = dynamic(
  () => import("@mantine/code-highlight").then((m) => m.CodeHighlightTabs),
  {
    ssr: false,
    loading: () => <Loader size="sm" p={24} />,
  }
)

const CodeHighlight = dynamic(
  () => import("@mantine/code-highlight").then((m) => m.CodeHighlight),
  {
    ssr: false,
    loading: () => <Loader size="sm" p={24} />,
  }
)

const Icons = () => {
  return (
    <>
      <PageTitle>Icons</PageTitle>
      <Text mb="sm">
        Design-system uses icons from{" "}
        <Anchor href="https://tabler-icons.io/" target="_blank">
          Tabler Icons
        </Anchor>
      </Text>
      <Text mb="xs">Installation of React library</Text>
      <CodeHighlightTabs
        code={[
          { fileName: "npm", code: `npm i @tabler/icons-react --save`, language: "bash" },
          { fileName: "yarn", code: `yarn add @tabler/icons-react`, language: "bash" },
        ]}
        mb="md"
      />

      <Text mb="xs">Icon usage</Text>
      <CodeHighlight
        language="jsx"
        code={`import { IconHeart } from "@tabler/icons-react"

function IconDemo() {
  return (
    <IconHeart />
  )
}`}
      >
        {}
      </CodeHighlight>
    </>
  )
}

export default Icons
