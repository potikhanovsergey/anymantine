import React, { useState } from "react"
import { MantineNumberSize, useMantineTheme, rem } from "@mantine/core"
import controls, { ControlProps } from "./controls"
import { propsToString } from "./props-to-string"
import useStyles from "./Configurator.styles"
import dynamic from "next/dynamic"

const Prism = dynamic(() => import("@mantine/prism").then((m) => m.Prism))

interface ConfiguratorProps {
  component: any
  codeTemplate(props: string, children?: string): string
  previewBackground?: string
  multiline?: boolean | number
  includeCode?: boolean
  center?: boolean
  props: ControlProps[]
  filter?: string[]
  radius?: MantineNumberSize
  background?: string
}

export default function Configurator({
  component: Component,
  codeTemplate,
  previewBackground,
  props: componentProps,
  multiline = false,
  includeCode = true,
  center = true,
  radius,
  filter = [],
  background,
}: ConfiguratorProps) {
  const theme = useMantineTheme()
  const { classes, cx } = useStyles({ radius: radius || theme.defaultRadius, background })
  const initialState = componentProps.reduce((acc, prop) => {
    acc[prop.name] = prop.initialValue || controls[prop.type].initialValue
    return acc
  }, {})

  const [state, setState] = useState(initialState)
  const setStateField = (field: string, value: any) =>
    setState((current) => ({ ...current, [field]: value }))

  const items = componentProps.map((prop, index) => {
    const { name, data, type, capitalize, initialValue, label, ...others } = prop
    const ControlComponent = controls[type] as any
    return (
      <ControlComponent
        {...others}
        key={name}
        value={state[name]}
        label={label || name}
        onChange={(value: any) => setStateField(name, value)}
        data={data}
        capitalize={capitalize}
        style={{ marginTop: rem(index !== 0 ? 15 : 0) }}
      />
    )
  })

  const propsCode = propsToString({
    props: componentProps.filter((prop) => !filter.includes(prop.name)),
    values: state,
    multiline,
  })

  const code = codeTemplate(
    propsCode.length > 0 ? ` ${propsCode}` : propsCode,
    (state as any).children
  )

  return (
    <div>
      <div className={cx(classes.configurator, { [classes.noCode]: !includeCode })}>
        <div
          className={classes.preview}
          style={{
            justifyContent: center ? "center" : "flex-start",
          }}
        >
          <div>
            <Component {...state} />
          </div>
        </div>
        <div className={classes.controls}>{items}</div>
      </div>

      {includeCode && (
        <Prism
          language="tsx"
          className={classes.prism}
          classNames={{ code: classes.code, copy: classes.copy }}
        >
          {code}
        </Prism>
      )}
    </div>
  )
}
