import { ColorSwatch, useMantineTheme, Tooltip, useMantineColorScheme } from "@mantine/core"

const PrimaryColor = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const color =
    theme.colors[theme.primaryColor][
      typeof theme.primaryShade === "number" ? theme.primaryShade : theme.primaryShade[colorScheme]
    ]

  return (
    <Tooltip label={color}>
      <ColorSwatch size={40} radius={0} color={color} />
    </Tooltip>
  )
}

export default PrimaryColor
