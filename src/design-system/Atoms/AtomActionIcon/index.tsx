import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getActionIconConfigurator from "src/design-system/Configurator/configurators/action-icon"
import actionIconDocsProps from "./actionIconDocsProps"
import ActionIconPreview from "./ActionIconPreview"

const AtomActionIcon = () => {
  const theme = useMantineTheme()
  const actionIconConfigurator = getActionIconConfigurator(theme)
  return (
    <ComponentDocs
      {...actionIconDocsProps}
      preview={{
        configurator: actionIconConfigurator,
        children: <ActionIconPreview />,
      }}
    />
  )
}

export default AtomActionIcon
