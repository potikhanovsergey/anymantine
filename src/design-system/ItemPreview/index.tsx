import { Show, observer } from "@legendapp/state/react"
import { ActionIcon, Box, Group, Stack, Tooltip, Title, useMantineTheme } from "@mantine/core"
import { IconSettings } from "@tabler/icons-react"
import { ReactNode } from "react"
import { MantineDemo } from "../Demo/types"
import { Demo } from "../Demo"
import { configurableAtom } from "src/state/design-system"
import Mantine from "src/core/components/icons/Mantine"
import Link from "next/link"
import DesignSystemProvider from "../DesignSystemProvider"

export interface ItemPreviewProps {
  children: ReactNode
  title: string
  configurator: MantineDemo
  mantineLink?: string
}

const ItemPreview = ({ children, title, configurator, mantineLink }: ItemPreviewProps) => {
  const theme = useMantineTheme()

  return (
    <Stack spacing="xs">
      <Group noWrap spacing="xs">
        <Title order={2}>{title}</Title>
        {mantineLink && (
          <Tooltip label={mantineLink}>
            <Box component={Link} lh={0} href={mantineLink} target="_blank">
              <Mantine />
            </Box>
          </Tooltip>
        )}
        <Tooltip
          label={
            <Show if={configurableAtom.get() === title} else="Открыть конфигуратор">
              Скрыть конфигуратор
            </Show>
          }
        >
          <ActionIcon
            variant="transparent"
            onClick={() => configurableAtom.set((prev) => (prev === title ? null : title))}
          >
            <IconSettings stroke={1} color={theme.black} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Show
        if={configurableAtom.get() === title}
        else={<DesignSystemProvider>{children}</DesignSystemProvider>}
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
