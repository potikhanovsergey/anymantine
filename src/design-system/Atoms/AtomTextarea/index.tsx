import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getTextareaConfigurator from "src/design-system/Configurator/configurators/textarea"
import textareaDocsProps from "./textareaDocsProps"
import TextareaPreview from "./TextareaPreview"

const AtomTextarea = () => {
  const theme = useMantineTheme()
  const textareaConfigurator = getTextareaConfigurator(theme)

  return (
    <ComponentDocs
      {...textareaDocsProps}
      preview={{
        configurator: textareaConfigurator,
        children: <TextareaPreview />,
      }}
    />
  )
}

export default AtomTextarea
