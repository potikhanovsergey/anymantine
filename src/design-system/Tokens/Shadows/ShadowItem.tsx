import {
  Box,
  Center,
  MantineShadow,
  Text,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
interface ShadowItemProps {
  shadow: MantineShadow
  title: string
  useCases: string[]
}

interface ShadowBoxProps {
  shadow: MantineShadow
}

const ShadowBox = ({ shadow }: ShadowBoxProps) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <Center
      style={{
        boxShadow: theme.shadows[shadow],
        width: rem(80),
        maxWidth: rem(80),
        aspectRatio: "1/1",
        background: colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2],
        marginBottom: theme.spacing.md,
      }}
    >
      {shadow}
    </Center>
  )
}

const ShadowItem = ({ shadow, title, useCases }: ShadowItemProps) => {
  return (
    <Box>
      <ShadowBox shadow={shadow} />
      {useCases.map((useCase) => (
        <Text size="sm" color="dimmed" key={useCase}>
          {useCase}
        </Text>
      ))}
    </Box>
  )
}

export default ShadowItem
