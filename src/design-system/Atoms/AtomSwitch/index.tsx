import { useMantineTheme } from "@mantine/core"
import getSwitchConfigurator from "src/design-system/Configurator/configurators/switch"

import ComponentDocs from "src/design-system/ComponentDocs"
import SwitchPreview from "./SwitchPreview"
import switchDocsProps from "./switchDocsProps"

const AtomSwitch = () => {
  const theme = useMantineTheme()
  const switchConfigurator = getSwitchConfigurator(theme)

  return (
    <ComponentDocs
      {...switchDocsProps}
      preview={{
        configurator: switchConfigurator,
        children: <SwitchPreview />,
      }}
    />
  )
}

export default AtomSwitch
