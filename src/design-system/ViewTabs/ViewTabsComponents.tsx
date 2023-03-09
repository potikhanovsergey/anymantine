import { Tabs as MantineTabs, MantineProvider } from "@mantine/core"
import Tabs from "src/core/components/molecules/Tabs"
import GeistTheme from "src/themes/GeistTheme"
import ViewTabsTokens from "./ViewTabsTokens"
import ViewTabsAtoms from "./ViewTabsAtoms"
import ViewTabsMolecules from "./ViewTabsMolecules"
import { ModalsProvider } from "@mantine/modals"
import TestModal from "../TestModal"

const ViewTabsComponents = () => {
  return (
    <MantineTabs.Panel value="components" mt="md">
      <Tabs>
        <MantineTabs.List mb="xl">
          <MantineTabs.Tab value="tokens">Токены</MantineTabs.Tab>
          <MantineTabs.Tab value="atoms">Атомы</MantineTabs.Tab>
          <MantineTabs.Tab value="molecules">Молекулы</MantineTabs.Tab>
        </MantineTabs.List>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={GeistTheme}>
          <ModalsProvider modals={{ test: TestModal }}>
            <ViewTabsTokens />
            <ViewTabsAtoms />
            <ViewTabsMolecules />
          </ModalsProvider>
        </MantineProvider>
      </Tabs>
    </MantineTabs.Panel>
  )
}

export default ViewTabsComponents
