import { Group, Title, useMantineTheme } from "@mantine/core"
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
      <Title order={2} mb="xl">
        Радиусы
      </Title>
      <Radiuses />
      <Title order={2} my="xl">
        Тени
      </Title>
      <Shadows />
    </div>
  )
}

export default RadiusesAndShadows
