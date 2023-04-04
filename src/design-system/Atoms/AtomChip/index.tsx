import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getChipConfigurator from "src/design-system/Configurator/configurators/chip"
import chipDocsProps from "./chipDocsProps"
import ChipPreview from "./ChipPreview"

const AtomChip = () => {
  const theme = useMantineTheme()
  const chipConfigurator = getChipConfigurator(theme)

  return (
    <ComponentDocs
      {...chipDocsProps}
      preview={{
        configurator: chipConfigurator,
        children: <ChipPreview />,
      }}
    />
  )
}

export default AtomChip
