import {
  Box,
  Group,
  Stack,
  Title,
  Text,
  Button,
  MantineProvider,
  TextInput,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import { DesignTheme } from "src/state/design-system"
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
    <Box>
      <Title order={2} mb="xl">
        Радиусы
      </Title>
      <MantineProvider>
        <Radiuses />
      </MantineProvider>
      <Title order={2} my="xl">
        Тени
      </Title>
      <MantineProvider>
        <Shadows />
      </MantineProvider>
    </Box>
  )
}

export default RadiusesAndShadows
