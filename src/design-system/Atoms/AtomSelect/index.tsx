import { useMantineTheme } from "@mantine/core"
import getSelectConfigurator from "src/design-system/Configurator/configurators/select"
import ComponentDocs from "src/design-system/ComponentDocs"
import SelectPreview from "./SelectPreview"
import selectDocsProps from "./selectDocsProps"

export const selectDataMock = ["Orange", "Banana", "Mango", "Apple", "Lemon", "Kiwi"]

const AtomSelect = () => {
  const theme = useMantineTheme()
  const selectConfigurator = getSelectConfigurator(theme)
  return (
    <ComponentDocs
      {...selectDocsProps}
      preview={{
        configurator: selectConfigurator,
        children: <SelectPreview />,
      }}
    />
  )
}

export default AtomSelect
