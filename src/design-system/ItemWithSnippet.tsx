import {
  Box,
  Group,
  createStyles,
  Text,
  rem,
  UnstyledButton,
  Loader,
  Accordion,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronRight } from "@tabler/icons-react"
import dynamic from "next/dynamic"
import { ReactNode } from "react"

const Prism = dynamic(() => import("@mantine/prism").then((m) => m.Prism), {
  ssr: false,
  loading: () => <Loader size="sm" p={24} color="violet" />,
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
}

const demoCode = `import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button variant="filled">Первая кнопка</Button>
      <Button variant="outline">Вторая кнопка</Button>
    </Group>
  )
}`

const ItemWithSnippet = ({ children }: ItemWithSnippetProps) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.body}>{children}</Box>
      <Accordion
        classNames={{
          content: classes.accordionContent,
          control: classes.accordionControl,
        }}
      >
        <Accordion.Item value="code">
          <Accordion.Control>Пример кода</Accordion.Control>
          <Accordion.Panel p={0}>
            <Prism
              withLineNumbers
              copyLabel="Скопировать код"
              copiedLabel="Скопировано"
              language="tsx"
            >
              {demoCode}
            </Prism>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  )
}

export default ItemWithSnippet
