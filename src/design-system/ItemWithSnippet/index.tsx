import { rem, Loader, Accordion, useMantineTheme } from "@mantine/core"
import dynamic from "next/dynamic"
import { ReactNode } from "react"
import classes from "./ItemWithSnippet.module.css"

const CodeHighlight = dynamic(
  () => import("@mantine/code-highlight").then((m) => m.CodeHighlight),
  {
    ssr: false,
    loading: () => <Loader size="sm" p={24} />,
  }
)

export interface ItemWithSnippetProps {
  children: ReactNode
  snippet: string
}

const ItemWithSnippet = ({ children, snippet }: ItemWithSnippetProps) => {
  const theme = useMantineTheme()
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>{children}</div>
      <Accordion
        classNames={{
          content: classes.accordionContent,
          control: classes.accordionControl,
        }}
      >
        <Accordion.Item value="code">
          <Accordion.Control>Code snippet</Accordion.Control>
          <Accordion.Panel p={0}>
            <CodeHighlight code={snippet} language="tsx" />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ItemWithSnippet
