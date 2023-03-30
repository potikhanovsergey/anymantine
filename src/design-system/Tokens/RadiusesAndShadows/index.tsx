import { Group, Title, useMantineTheme, Text } from "@mantine/core"
import ShadowItem from "../Shadows/ShadowItem"
import CornerItem from "../Corners/CornerItem"

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
    <div>
      <Title order={1} mb="md">
        Radiuses and shadows
      </Title>
      <Text mb="xl">We need radiuses and shadows to ...</Text>
      <Title order={2} mb="md">
        Radiuses
      </Title>
      <Radiuses />
      <Title order={2} my="md">
        Shadows
      </Title>
      <Shadows />
    </div>
  )
}

export default RadiusesAndShadows
