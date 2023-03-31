import React from "react"
import { useMantineTheme } from "@mantine/core"
import { MantineDemo } from "./types"
import dynamic from "next/dynamic"

const CodeDemo = dynamic(() => import("../CodeDemo/CodeDemo"))
const Configurator = dynamic(() => import("../Configurator/Configurator"))

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
          <>
            {data.wrapper ? (
              <data.wrapper>
                <data.component />
              </data.wrapper>
            ) : (
              <data.component />
            )}
          </>
        )}
      </CodeDemo>
    )
  }

  if (data.type === "configurator") {
    return (
      <Configurator
        component={(props: any) =>
          data.component &&
          (data.wrapper ? (
            <data.wrapper>
              <data.component {...props} />
            </data.wrapper>
          ) : (
            <data.component {...props} />
          ))
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
