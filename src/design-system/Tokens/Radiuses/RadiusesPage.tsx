import { useMantineTheme, Group } from "@mantine/core"
import CornerItem from "./CornerItem"
import PageTitle from "src/design-system/layout/PageTitle"

const Radiuses = () => {
  const theme = useMantineTheme()
  return (
    <Group spacing={64}>
      {Object.keys(theme.radius).map((radius) => (
        <CornerItem useCases={[]} key={radius} radius={theme.radius[radius]} title={radius} />
      ))}
    </Group>
  )
}

const RadiusesPage = () => {
  return (
    <>
      <PageTitle>Radiuses</PageTitle>
      <Radiuses />
    </>
  )
}

export default RadiusesPage
