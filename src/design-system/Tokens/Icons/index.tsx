import { Title, Text, Anchor } from "@mantine/core"
import { Prism } from "@mantine/prism"

const Icons = () => {
  return (
    <>
      <Title order={1} mb="md">
        Иконки
      </Title>
      <Text mb="sm">
        В дизайн-системе используются иконки из библиотеки{" "}
        <Anchor href="https://tabler-icons.io/" inline target="_blank">
          Tabler Icons
        </Anchor>
        .
      </Text>
      <Text mb="xs">Установка библиотеки иконок на React</Text>
      <Prism.Tabs defaultValue="npm" mb="md">
        <Prism.TabsList>
          <Prism.Tab value="npm">npm</Prism.Tab>
          <Prism.Tab value="yarn">yarn</Prism.Tab>
        </Prism.TabsList>
        <Prism.Panel value="npm" language="bash">
          npm i @tabler/icons-react --save
        </Prism.Panel>
        <Prism.Panel value="yarn" language="bash">
          yarn add @tabler/icons-react
        </Prism.Panel>
      </Prism.Tabs>
      <Text mb="xs">Использование иконки</Text>
      <Prism language="jsx">
        {`import { IconHeart } from "@tabler/icons-react"

function IconDemo() {
  return (
    <IconHeart />
  )
}
        `}
      </Prism>
    </>
  )
}

export default Icons
