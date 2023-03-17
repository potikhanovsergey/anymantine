import { SkeletonProps, Group, Skeleton } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"

const codeTemplate = (props: string) => `
import { Skeleton } from '@mantine/core';

function Demo() {
  return (
    <Skeleton${props} />
  );
}
`

function Wrapper(props: SkeletonProps) {
  return (
    <Group position="center">
      <Skeleton {...props} />
    </Group>
  )
}

const SkeletonConfigurator: MantineDemo = {
  type: "configurator",
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: "variant",
      type: "select",
      data: [
        { label: "primary", value: "primary" },
        { label: "secondary", value: "secondary" },
        { label: "shadow", value: "shadow" },
      ],
      initialValue: "primary",
    },
    { name: "radius", type: "size", initialValue: "sm", defaultValue: "sm" },
    { name: "width", type: "string", initialValue: "100%", defaultValue: "100%" },
    { name: "height", type: "string", initialValue: "40px", defaultValue: "40px" },
    { name: "animate", type: "boolean", initialValue: true, defaultValue: true },
    { name: "circle", type: "boolean", initialValue: false, defaultValue: false },
    { name: "loading", type: "boolean", initialValue: true, defaultValue: true },
  ],
}

export default SkeletonConfigurator
