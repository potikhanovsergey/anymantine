import React from "react"
import {
  Group,
  Input,
  useMantineTheme,
  ColorSwatch,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import { upperFirst } from "@mantine/hooks"
import { IconCheck } from "@tabler/icons-react"

interface ColorControlProps {
  value: string
  label: string
  onChange(value: string): void
}

const ColorSwatches = ({ value, onChange }: Omit<ColorControlProps, "label">) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const colors = Object.keys(theme.colors).map((color) => (
    <ColorSwatch
      color={colorScheme === "dark" ? theme.colors[color][7] : theme.colors[color][5]}
      component="button"
      key={color}
      onClick={() => onChange(color)}
      radius="sm"
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: `1 0 calc(15% - ${rem(4)})`,
      }}
    >
      {value === color && <IconCheck color={theme.white} size={rem(8)} />}
    </ColorSwatch>
  ))
  return <>{colors}</>
}

export function ColorControl({ value, label, onChange, ...others }: ColorControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
      <Group gap={2} mt={5}>
        <ColorSwatches value={value} onChange={onChange} />
      </Group>
    </Input.Wrapper>
  )
}

ColorControl.initialValue = "blue"
