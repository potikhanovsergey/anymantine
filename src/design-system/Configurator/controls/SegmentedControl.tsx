import React from "react"
import { Input, SegmentedControl as MantineSegmentedControl } from "@mantine/core"
import { upperFirst } from "@mantine/hooks"

interface SizeControlProps {
  value: string
  label: string
  onChange(value: string): void
  data: { value: string; label: string }[]
}

export function SegmentedControl({ value, label, onChange, data, ...others }: SizeControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
      <MantineSegmentedControl
        size="xs"
        data={data.map((item) => ({ value: item.value, label: upperFirst(item.label) }))}
        value={value}
        onChange={onChange}
        fullWidth
      />
    </Input.Wrapper>
  )
}

SegmentedControl.initialValue = ""
