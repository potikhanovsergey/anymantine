import {
  Tabs as MantineTabs,
  Tooltip,
  useMantineTheme,
  MantineProvider,
  Button,
} from "@mantine/core"
import { IconLock } from "@tabler/icons-react"
import Tabs from "src/core/components/molecules/Tabs"
import GeistTheme from "src/themes/GeistTheme"
import ViewTabsComponents from "./ViewTabsComponents"
import ViewTabsPreview from "./ViewTabsPreview"

const ViewTabs = () => {
  const theme = useMantineTheme()
  return (
    <Tabs pos="sticky" top={0} py={theme.spacing.md} bg={theme.white}>
      <MantineTabs.List mb="md">
        <MantineTabs.Tab value="preview">Превью</MantineTabs.Tab>
        <MantineTabs.Tab value="components">Компоненты</MantineTabs.Tab>
        <Tooltip label="Необходимо приобрести дизайн-систему">
          <MantineTabs.Tab disabled value="usage" icon={<IconLock size={20} stroke={1} />}>
            Использование
          </MantineTabs.Tab>
        </Tooltip>
      </MantineTabs.List>
      <ViewTabsPreview />
      <ViewTabsComponents />
    </Tabs>
  )
}

export default ViewTabs
