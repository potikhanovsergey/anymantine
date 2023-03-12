import { Show, observer } from "@legendapp/state/react"
import { ActionIcon, Box, Group, Stack, Tooltip, Title, useMantineTheme } from "@mantine/core"
import { IconSettings } from "@tabler/icons-react"
import { ReactNode } from "react"
import { configurableAtom } from "src/state/design-system"
import { MantineDemo } from "../Demo/types"
import { Demo } from "../Demo"

export interface ItemPreviewProps {
  children: ReactNode
  title: string
  configurator: MantineDemo
}

const ItemPreview = ({ children, title, configurator }: ItemPreviewProps) => {
  const theme = useMantineTheme()

  const toggleConfigurable = () => {
    configurableAtom.set((prev) => (prev === title ? null : title))
  }
  return (
    <Stack spacing="xs">
      <Group noWrap spacing="xs">
        <Title order={2}>{title}</Title>
        <Tooltip
          label={configurableAtom.get() === title ? "Скрыть конфигуратор" : "Открыть конфигуратор"}
        >
          <ActionIcon variant="transparent" onClick={toggleConfigurable}>
            <IconSettings stroke={1} color={theme.black} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Show
        if={configurableAtom.get() === title}
        else={
          <Group noWrap position="apart">
            <Box>{children}</Box>
          </Group>
        }
      >
        <Demo
          data={configurator}
          configuratorProps={{
            previewBackground: theme.white,
          }}
        />
      </Show>
    </Stack>
  )
}

export default observer(ItemPreview)
