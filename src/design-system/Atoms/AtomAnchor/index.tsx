import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getAnchorConfigurator from "src/design-system/Configurator/configurators/anchor"
import anchorDocsProps from "./anchorDocsProps"
import AnchorPreview from "./AnchorPreview"

const AtomAnchor = () => {
  const theme = useMantineTheme()
  const anchorConfigurator = getAnchorConfigurator(theme)
  return (
    <ComponentDocs
      {...anchorDocsProps}
      preview={{
        configurator: anchorConfigurator,
        children: <AnchorPreview />,
      }}
    />
  )
}

export default AtomAnchor
