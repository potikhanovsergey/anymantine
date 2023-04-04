import { useMantineTheme } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import ComponentDocs from "src/design-system/ComponentDocs"
import ButtonPreview from "./ButtonPreview"
import buttonDocsProps from "./buttonDocsProps"

const AtomButton = () => {
  const theme = useMantineTheme()
  const buttonConfigurator = getButtonConfigurator(theme)
  return (
    <ComponentDocs
      {...buttonDocsProps}
      preview={{
        configurator: buttonConfigurator,
        children: <ButtonPreview />,
      }}
    />
  )
}

export default AtomButton
