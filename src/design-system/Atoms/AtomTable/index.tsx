import { useMantineTheme } from "@mantine/core"

import ComponentDocs from "src/design-system/ComponentDocs"
import tableDocsProps from "./tableDocsProps"
import TablePreview from "./TablePreview"
import getTableConfigurator from "src/design-system/Configurator/configurators/table"

const AtomTable = () => {
  const theme = useMantineTheme()
  const tableConfigurator = getTableConfigurator(theme)

  return (
    <ComponentDocs
      {...tableDocsProps}
      preview={{
        configurator: tableConfigurator,
        children: <TablePreview />,
      }}
    />
  )
}

export default AtomTable
