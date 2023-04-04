import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getCheckboxConfigurator from "src/design-system/Configurator/configurators/checkbox"
import checkboxDocsProps from "./checkboxDocsProps"
import CheckboxPreview from "./CheckboxPreview"

const AtomCheckbox = () => {
  const theme = useMantineTheme()
  const checkboxConfigurator = getCheckboxConfigurator(theme)
  return (
    <ComponentDocs
      {...checkboxDocsProps}
      preview={{
        configurator: checkboxConfigurator,
        children: <CheckboxPreview />,
      }}
    />
  )
}

export default AtomCheckbox
