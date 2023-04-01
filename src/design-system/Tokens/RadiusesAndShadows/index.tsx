import { Group, Title, useMantineTheme, Text } from "@mantine/core"
import ShadowItem from "../Shadows/ShadowItem"
import CornerItem from "../Corners/CornerItem"
import PageTitle from "src/design-system/layout/PageTitle"
import PageSubtitle from "src/design-system/layout/PageSubtitle"

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

const RadiusesAndShadows = () => {
  return (
    <>
      <PageTitle>Radiuses and shadows</PageTitle>
      <Text mb="xl">We need radiuses and shadows to ...</Text>
      <PageSubtitle>Radiuses</PageSubtitle>
      <Radiuses />
      <PageSubtitle>Shadows</PageSubtitle>
      <Shadows />
    </>
  )
}

export default RadiusesAndShadows
