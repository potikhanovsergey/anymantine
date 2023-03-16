import React from "react"
import { NativeSelect, Select } from "@mantine/core"
import { upperFirst } from "@mantine/hooks"

interface SelectControlProps {
  value: string
  label: string
  capitalize: boolean
  onChange(value: string): void
  data: { label: string; value: string }[]
}

export function SelectControl({
  value,
  label,
  onChange,
  data,
  capitalize: capitalizeItems = true,
  ...others
}: SelectControlProps) {
  return (
    <Select
      data={data.map((item) => ({
        value: item.value,
        label: capitalizeItems ? upperFirst(item.label) : item.label,
      }))}
      value={value}
      label={upperFirst(label)}
      onChange={onChange}
      {...others}
    />
  )
}

SelectControl.initialValue = ""
