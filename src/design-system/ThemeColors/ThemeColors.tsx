import React from "react"
import { SimpleGrid, useMantineTheme, Tooltip, Text } from "@mantine/core"
import { ColorsGroup } from "./ColorsGroup"
import { observer, useComputed, useObservable } from "@legendapp/state/react"

const ThemeColors = () => {
  const theme = useMantineTheme()
  const hoveredColor = useObservable(null as string | null)
  const handleSetTooltip = (color: string) => {
    hoveredColor.set(color)
  }
  const handleMouseLeave = () => {
    hoveredColor.set(null)
  }

  const swatches = Object.keys(theme.colors).map((group) => (
    <ColorsGroup
      onMouseLeave={handleMouseLeave}
      setTooltip={handleSetTooltip}
      group={group}
      key={group}
    />
  ))

  const tooltipHidden = useComputed(() => hoveredColor.get() === null)

  return (
    <Tooltip.Floating
      sx={{
        display: tooltipHidden.get() ? "none !important" : undefined,
      }}
      label={hoveredColor}
      position="top"
    >
      <SimpleGrid spacing={0} maw={560} cols={11}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Text key={n} color="dimmed" ta="center">
            {n}
          </Text>
        ))}
        <span></span>
        {swatches}
      </SimpleGrid>
    </Tooltip.Floating>
  )
}

export default observer(ThemeColors)
