import { SkeletonProps, Group, Skeleton, MantineThemeOverride, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

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
    <Group justify="center">
      <Skeleton {...props} />
    </Group>
  )
}

const getSkeletonConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Skeleton", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      { name: "width", type: "string", initialValue: "100%" },
      { name: "height", type: "string", initialValue: "40px" },
      { name: "animate", type: "boolean", initialValue: true },
      { name: "circle", type: "boolean", initialValue: false },
      { name: "loading", type: "boolean", initialValue: true },
    ],
  } as MantineDemo
}

export default getSkeletonConfigurator
