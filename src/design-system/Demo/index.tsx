import React from "react"
import { MantineProvider, useMantineTheme } from "@mantine/core"
import { MantineDemo } from "./types"
import CodeDemo from "../CodeDemo/CodeDemo"
import Configurator from "../Configurator/Configurator"
import { DesignTheme } from "src/state/design-system"

export { CodeDemo, Configurator }

type ConfiguratorProps = React.ComponentProps<typeof Configurator>
type CodeDemoProps = React.ComponentProps<typeof CodeDemo>

interface DemoProps {
  toggle?: boolean
  demoProps?: CodeDemoProps
  configuratorProps?: Omit<ConfiguratorProps, "props" | "codeTemplate" | "component">
  data: MantineDemo
}

export function Demo({ data, demoProps, configuratorProps }: DemoProps) {
  const theme = useMantineTheme()
  const background =
    typeof data.background === "function" ? data.background(theme.colorScheme) : undefined

  if (data.type === "demo") {
    return (
      <CodeDemo
        language="tsx"
        code={data.code}
        demoBackground={background}
        {...data.demoProps}
        {...demoProps}
      >
        {data.component && (
          <MantineProvider inherit theme={DesignTheme.peek()}>
            {data.wrapper ? (
              <data.wrapper>
                <data.component />
              </data.wrapper>
            ) : (
              <data.component />
            )}
          </MantineProvider>
        )}
      </CodeDemo>
    )
  }

  if (data.type === "configurator") {
    return (
      <Configurator
        component={(props: any) =>
          data.component && (
            <MantineProvider inherit theme={DesignTheme.peek()}>
              {data.wrapper ? (
                <data.wrapper>
                  <data.component {...props} />
                </data.wrapper>
              ) : (
                <data.component {...props} />
              )}
            </MantineProvider>
          )
        }
        codeTemplate={data.codeTemplate}
        props={data.configurator || []}
        previewBackground={background}
        {...data.configuratorProps}
        {...configuratorProps}
      />
    )
  }

  return null
}
