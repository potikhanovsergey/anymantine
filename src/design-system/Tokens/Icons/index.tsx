import { Text } from "@mantine/core"
import { Prism } from "@mantine/prism"
import Link from "src/core/components/atoms/Link"
import PageTitle from "src/design-system/layout/PageTitle"

const Icons = () => {
  return (
    <>
      <PageTitle>Icons</PageTitle>
      <Text mb="sm">
        Design-system uses icons from{" "}
        <Link href="https://tabler-icons.io/" target="_blank">
          Tabler Icons
        </Link>
      </Text>
      <Text mb="xs">Installation of React library</Text>
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
      <Text mb="xs">Icon usage</Text>
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
