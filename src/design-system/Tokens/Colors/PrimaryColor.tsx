import { ColorSwatch, useMantineTheme, Tooltip } from "@mantine/core"

const PrimaryColor = () => {
  const theme = useMantineTheme()
  const color = theme.fn.primaryColor()
  return (
    <Tooltip label={color}>
      <ColorSwatch size={40} radius={0} color={color} />
    </Tooltip>
  )
}

export default PrimaryColor
