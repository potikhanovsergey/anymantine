import { useMantineTheme, Group } from "@mantine/core"
import PageTitle from "src/design-system/layout/PageTitle"
import ShadowItem from "./ShadowItem"

const Shadows = () => {
  const theme = useMantineTheme()
  return (
    <Group spacing={64}>
      {Object.keys(theme.shadows).map((shadow) => (
        <ShadowItem useCases={[]} key={shadow} shadow={shadow} title={shadow} />
      ))}
    </Group>
  )
}

const ShadowsPage = () => {
  return (
    <>
      <PageTitle>Shadows</PageTitle>
      <Shadows />
    </>
  )
}

export default ShadowsPage
