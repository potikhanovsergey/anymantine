import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getMultiSelectConfigurator from "src/design-system/Configurator/configurators/multi-select"
import multiSelectDocsProps from "./multiSelectDocsProps"
import MultiSelectPreview from "./MultiSelectPreview"

const AtomMultiSelect = () => {
  const theme = useMantineTheme()
  const multiSelectConfigurator = getMultiSelectConfigurator(theme)

  return (
    <ComponentDocs
      {...multiSelectDocsProps}
      preview={{
        configurator: multiSelectConfigurator,
        children: <MultiSelectPreview />,
      }}
    />
  )
}

export default AtomMultiSelect
