import { Tabs, Tooltip, useMantineTheme } from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import ViewTabsComponents from "./ViewTabsComponents"
import ViewTabsPreview from "./ViewTabsPreview"
import React from "react"

const ViewTabs = () => {
  const theme = useMantineTheme()
  return (
    <Tabs keepMounted={false} pos="sticky" top={0} pb={theme.spacing.md} bg={theme.white}>
      <Tabs.List defaultValue="components" mb="md">
        <Tabs.Tab value="components">Компоненты</Tabs.Tab>
        <Tabs.Tab value="examples">Примеры</Tabs.Tab>
        <Tooltip label="Необходимо приобрести дизайн-систему">
          <Tabs.Tab disabled value="usage" icon={<IconLock size={20} stroke={1} />}>
            Файл темы
          </Tabs.Tab>
        </Tooltip>
      </Tabs.List>
      <ViewTabsPreview />
      <ViewTabsComponents />
    </Tabs>
  )
}

export default ViewTabs
