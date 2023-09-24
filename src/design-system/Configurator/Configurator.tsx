import React, { useEffect, useState } from "react"
import { useMantineTheme, rem, MantineRadius } from "@mantine/core"
import controls, { ControlProps } from "./controls"
import { propsToString } from "./props-to-string"
import dynamic from "next/dynamic"
import classes from "./Configurator.module.css"
import cx from "clsx"

const CodeHighligt = dynamic(() => import("@mantine/code-highlight").then((m) => m.CodeHighlight))

interface ConfiguratorProps {
  component: any
  codeTemplate(props: string, children?: string): string
  previewBackground?: string
  multiline?: boolean | number
  includeCode?: boolean
  center?: boolean
  props: ControlProps[]
  filter?: string[]
  radius?: MantineRadius
  background?: string
}

export default function Configurator({
  component: Component,
  codeTemplate,
  props: componentProps,
  multiline = false,
  includeCode = true,
  center = true,
  filter = [],
}: ConfiguratorProps) {
  // const { classes, cx } = useStyles({ radius: radius || theme.defaultRadius, background })
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
        <CodeHighligt
          key={code}
          language="tsx"
          className={classes.codeHighlight}
          classNames={{ code: classes.code, copy: classes.copy }}
          code={code}
        />
      )}
    </div>
  )
}
