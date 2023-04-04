import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getTextInputConfigurator from "src/design-system/Configurator/configurators/text-input"
import textInputDocsProps from "./textInputDocsProps"
import TextInputPreview from "./TextInputPreview"

const AtomTextInputs = () => {
  const theme = useMantineTheme()
  const textInputConfigurator = getTextInputConfigurator(theme)

  return (
    <ComponentDocs
      {...textInputDocsProps}
      preview={{
        configurator: textInputConfigurator,
        children: <TextInputPreview />,
      }}
    />
  )
}

export default AtomTextInputs
