import React from "react"
import { ColorSwatch, Text, Box, rem, Center, UnstyledButton, CopyButton } from "@mantine/core"
import useStyles from "./ColorsGroup.styles"

interface ColorsGroupProps {
  group: string
  setTooltip?: (color: string) => void
  onMouseLeave?: () => void
}

export function ColorsGroup({ group, setTooltip, onMouseLeave }: ColorsGroupProps) {
  const { classes, theme } = useStyles()

  return (
    <>
      {theme.colors[group].map((color) => (
        <CopyButton key={color} value={color} timeout={2000}>
          {({ copied, copy }) => (
            <UnstyledButton
              onClick={() => {
                copy()
                setTooltip?.("Copied")
              }}
              onMouseEnter={() => setTooltip?.(color)}
              onMouseLeave={onMouseLeave}
              w="100%"
              bg={`${color} content-box`}
              className={classes.color}
            ></UnstyledButton>
          )}
        </CopyButton>
      ))}
      <Center>
        <Text color="dimmed">{group}</Text>
      </Center>
    </>
  )
}
