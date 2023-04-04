import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getAccordionConfigurator from "src/design-system/Configurator/configurators/accordion"
import accordionDocsProps from "./accordionDocsProps"
import AccordionPreview from "./AccordionPreview"

const AtomAccordion = () => {
  const theme = useMantineTheme()
  const accordionConfigurator = getAccordionConfigurator(theme)

  return (
    <ComponentDocs
      {...accordionDocsProps}
      preview={{
        configurator: accordionConfigurator,
        children: <AccordionPreview />,
      }}
    />
  )
}

export default AtomAccordion
