import React, { useState } from "react"
import {
  ColorSwatch,
  Text,
  Box,
  rem,
  Center,
  UnstyledButton,
  CopyButton,
  useMantineTheme,
} from "@mantine/core"

interface ColorsGroupProps {
  group: string
  setTooltip?: (color: string) => void
  onMouseLeave?: () => void
}

const getColor = (color, group, i) => `${color} / theme.colors.${group}[${i}]`

export function ColorsGroup({ group, setTooltip, onMouseLeave }: ColorsGroupProps) {
  const theme = useMantineTheme()

  return theme.colors[group] ? (
    <>
      {theme.colors[group]?.map((color, i) => (
        <CopyButton key={color} value={getColor(color, group, i)} timeout={2000}>
          {({ copied, copy }) => (
            <UnstyledButton
              onClick={() => {
                copy()
                setTooltip?.("Copied")
              }}
              onMouseEnter={() => setTooltip?.(getColor(color, group, i))}
              onMouseLeave={onMouseLeave}
              w="100%"
              bg={`${color} content-box`}
              style={{
                aspectRatio: "1/1",
                height: "auto",
                padding: rem(2),
              }}
            ></UnstyledButton>
          )}
        </CopyButton>
      ))}
      <Center>
        <Text color="dimmed">{group}</Text>
      </Center>
    </>
  ) : (
    <></>
  )
}
