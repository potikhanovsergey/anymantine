import { Box, createStyles, rem, Loader, Accordion, useMantineTheme } from "@mantine/core"
import dynamic from "next/dynamic"
import { ReactNode } from "react"

const Prism = dynamic(() => import("@mantine/prism").then((m) => m.Prism), {
  ssr: false,
  loading: () => <Loader size="sm" p={24} />,
})

const useStyles = createStyles((theme) => ({
  wrapper: {
    border: `1px solid ${theme.black}`,
  },
  body: {
    padding: rem(24),
  },
  footer: {
    background: theme.colors.gray[1],
    height: rem(40),
    paddingLeft: rem(24),
    paddingRight: rem(24),
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  accordionContent: {
    padding: 0,
  },
  accordionControl: {
    backgroundColor: theme.colors.gray[0],
  },
}))

export interface ItemWithSnippetProps {
  children: ReactNode
  snippet: string
}

const ItemWithSnippet = ({ children, snippet }: ItemWithSnippetProps) => {
  const { classes } = useStyles()
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
          <Accordion.Control>Пример кода</Accordion.Control>
          <Accordion.Panel p={0}>
            <Prism bg={theme.colors.gray[0]} withLineNumbers language="tsx">
              {snippet}
            </Prism>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ItemWithSnippet
