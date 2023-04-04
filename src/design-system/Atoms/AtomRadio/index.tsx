import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getRadioConfigurator from "src/design-system/Configurator/configurators/radio"
import radioDocsProps from "./radioDocsProps"
import RadioPreview from "./RadioPreview"

const AtomRadio = () => {
  const theme = useMantineTheme()
  const radioConfigurator = getRadioConfigurator(theme)
  return (
    <ComponentDocs
      {...radioDocsProps}
      preview={{
        configurator: radioConfigurator,
        children: <RadioPreview />,
      }}
    />
  )
}

export default AtomRadio
