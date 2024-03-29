import { Show, useObservable } from "@legendapp/state/react"
import { ActionIcon, Group, Stack, Tooltip, useMantineTheme } from "@mantine/core"
import { IconAdjustments, IconSettings } from "@tabler/icons-react"
import { ReactNode } from "react"
import { MantineDemo } from "../Demo/types"
import { Demo } from "../Demo"
import PageSubtitle from "../layout/PageSubtitle"

export interface ItemPreviewProps {
  children: ReactNode
  configurator: MantineDemo
}

const ItemPreview = ({ children, configurator }: ItemPreviewProps) => {
  const theme = useMantineTheme()

  const configuratorOpened = useObservable(false)

  return (
    <Stack spacing="xs">
      <Group noWrap spacing="xs">
        <PageSubtitle mb={0}>Quick preview</PageSubtitle>
        <Tooltip
          label={
            <Show if={configuratorOpened} else="Open configurator">
              Hide configurator
            </Show>
          }
        >
          <ActionIcon variant="transparent" onClick={configuratorOpened.toggle}>
            <IconAdjustments
              stroke={2}
              color={theme.colorScheme === "dark" ? theme.white : theme.black}
            />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Show if={configuratorOpened} else={children}>
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
