import React from "react"
import { SimpleGrid, Tooltip, Text } from "@mantine/core"
import { ColorsGroup } from "./ColorsGroup"
import { observer, useComputed, useObservable, useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"

const ThemeSwatches = ({
  onMouseLeave,
  setTooltip,
}: {
  onMouseLeave: () => void
  setTooltip: (color: string) => void
}) => {
  const {
    theme: { colors },
  } = useSelector(appDesignTheme)

  return (
    <>
      {Object.keys(colors || {}).map((group) => (
        <ColorsGroup
          onMouseLeave={onMouseLeave}
          setTooltip={setTooltip}
          group={group}
          key={group}
        />
      ))}
    </>
  )
}

const ThemeColors = () => {
  const hoveredColor = useObservable(null as string | null)
  const handleSetTooltip = (color: string) => {
    hoveredColor.set(color)
  }
  const handleMouseLeave = () => {
    hoveredColor.set(null)
  }

  const tooltipHidden = useComputed(() => hoveredColor.get() === null)

  return (
    <Tooltip.Floating disabled={tooltipHidden.get()} label={hoveredColor} position="top">
      <div>
        <SimpleGrid spacing={0} maw={560} cols={11}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <Text key={n} color="dimmed" ta="center">
              {n}
            </Text>
          ))}
          <span></span>
          <ThemeSwatches onMouseLeave={handleMouseLeave} setTooltip={handleSetTooltip} />
        </SimpleGrid>
      </div>
    </Tooltip.Floating>
  )
}

export default observer(ThemeColors)
