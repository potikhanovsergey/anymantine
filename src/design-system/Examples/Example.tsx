import { Show, useObservable } from "@legendapp/state/react"
import {
  Group,
  Title,
  Text,
  ActionIcon,
  Tooltip,
  useMantineTheme,
  useMantineColorScheme,
  Loader,
} from "@mantine/core"
import { IconCode, IconCodeOff } from "@tabler/icons-react"
import dynamic from "next/dynamic"
import { ReactNode } from "react"

const CodeHighlight = dynamic(
  () => import("@mantine/code-highlight").then((m) => m.CodeHighlight),
  {
    ssr: false,
    loading: () => <Loader size="sm" p={24} />,
  }
)

export interface ExampleProps {
  title?: string
  description?: ReactNode
  children: ReactNode
  code?: string
  descriptive?: boolean
}

const Example = ({ title, description, code, children, descriptive = true }: ExampleProps) => {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  const dark = colorScheme === "dark"

  const configuratorOpened = useObservable(false)

  return (
    <Group wrap="nowrap" grow align="flex-start" gap={64}>
      <Show if={!!code && configuratorOpened} else={children}>
        <CodeHighlight code={code!} language="tsx" />
      </Show>
      <Show if={descriptive}>
        <div>
          <Group wrap="nowrap" gap="xs" mb="lg">
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
          {description && typeof description === "string" ? (
            <Text>{description}</Text>
          ) : (
            description
          )}
        </div>
      </Show>
    </Group>
  )
}

export default Example
