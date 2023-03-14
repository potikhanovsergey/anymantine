import { Show } from "@legendapp/state/react"
import { ActionIcon, Box, Group, Stack, Tooltip, Title, useMantineTheme } from "@mantine/core"
import { IconSettings } from "@tabler/icons-react"
import { ReactNode } from "react"
import { MantineDemo } from "../Demo/types"
import { Demo } from "../Demo"

export interface ItemPreviewProps {
  children: ReactNode
  title: string
  configurator: MantineDemo
  opened: boolean
  onToggleConfigurator?: () => void
}

const ItemPreview = ({
  children,
  title,
  configurator,
  opened,
  onToggleConfigurator,
}: ItemPreviewProps) => {
  const theme = useMantineTheme()

  return (
    <Stack spacing="xs">
      <Group noWrap spacing="xs">
        <Title order={2}>{title}</Title>
        <Tooltip label={opened ? "Скрыть конфигуратор" : "Открыть конфигуратор"}>
          <ActionIcon variant="transparent" onClick={onToggleConfigurator}>
            <IconSettings stroke={1} color={theme.black} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Show
        if={opened}
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

export default ItemPreview
