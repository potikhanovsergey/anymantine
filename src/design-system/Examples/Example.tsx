import { Show, useObservable } from "@legendapp/state/react"
import { Group, Title, Text, ActionIcon, Tooltip, useMantineTheme } from "@mantine/core"
import { Prism } from "@mantine/prism"
import { IconCode, IconCodeOff } from "@tabler/icons-react"
import { ReactNode } from "react"

export interface ExampleProps {
  title: string
  description?: ReactNode
  children: ReactNode
  code?: string
}

const Example = ({ title, description, code, children }: ExampleProps) => {
  const theme = useMantineTheme()
  const dark = theme.colorScheme === "dark"

  const configuratorOpened = useObservable(false)

  return (
    <Group noWrap grow align="flex-start" spacing={64}>
      <Show if={!!code && configuratorOpened} else={children}>
        <Prism language="tsx">{code!}</Prism>
      </Show>
      <div>
        <Group noWrap spacing="xs" mb="lg">
          <Title order={3}>{title}</Title>
          {code && (
            <Tooltip
              label={
                <Show if={configuratorOpened} else="Show snippet">
                  Hide snippet
                </Show>
              }
            >
              <ActionIcon variant="transparent" onClick={configuratorOpened.toggle}>
                <Show
                  if={configuratorOpened}
                  else={<IconCode stroke={2} color={dark ? theme.white : theme.black} />}
                >
                  <IconCodeOff stroke={2} color={dark ? theme.white : theme.black} />
                </Show>
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
        {description && typeof description === "string" ? <Text>{description}</Text> : description}
      </div>
    </Group>
  )
}

export default Example
