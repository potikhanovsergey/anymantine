import { SkeletonProps, Group, Skeleton, MantineThemeOverride } from "@mantine/core"
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

const getSkeletonConfigurator = (theme: MantineThemeOverride) =>
  ({
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "radius",
        type: "size",
        initialValue: theme.components?.Skeleton?.defaultProps?.["radius"] || theme.defaultRadius,
      },
      { name: "width", type: "string", initialValue: "100%" },
      { name: "height", type: "string", initialValue: "40px" },
      { name: "animate", type: "boolean", initialValue: true },
      { name: "circle", type: "boolean", initialValue: false },
      { name: "loading", type: "boolean", initialValue: true },
    ],
  } as MantineDemo)

export default getSkeletonConfigurator
