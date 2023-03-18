import { Tabs, Tooltip, useMantineTheme } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import ViewTabsComponents from "./ViewTabsComponents"
import ViewTabsPreview from "./ViewTabsPreview"
import React from "react"

const ViewTabs = () => {
  const theme = useMantineTheme()
  return (
    <Tabs defaultValue="components" pb={theme.spacing.md}>
      <Tabs.List py="md" sx={{ zIndex: 5 }} pos="sticky" top={0} bg={theme.white}>
        <Tabs.Tab value="components">Компоненты</Tabs.Tab>
        <Tooltip withinPortal label="Необходимо приобрести дизайн-систему">
          <Tabs.Tab disabled value="usage" icon={<IconLock size={20} stroke={1} />}>
            Файлы темы
          </Tabs.Tab>
        </Tooltip>
      </Tabs.List>
      <ViewTabsPreview />
      <ViewTabsComponents />
    </Tabs>
  )
}

export default ViewTabs
