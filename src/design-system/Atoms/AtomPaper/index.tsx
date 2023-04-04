import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getPaperConfigurator from "src/design-system/Configurator/configurators/paper"
import paperDocsProps from "./paperDocsProps"
import PaperPreview from "./PaperPreview"

const AtomPapers = () => {
  const theme = useMantineTheme()
  const paperConfigurator = getPaperConfigurator(theme)

  return (
    <ComponentDocs
      {...paperDocsProps}
      preview={{
        configurator: paperConfigurator,
        children: <PaperPreview />,
      }}
    />
  )
}

export default AtomPapers
