import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getTooltipConfigurator from "src/design-system/Configurator/configurators/tooltip"
import tooltipDocsProps from "./tooltipDocsProps"

import TooltipPreview from "./TooltipPreview"

const AtomTooltip = () => {
  const theme = useMantineTheme()
  const tooltipConfigurator = getTooltipConfigurator(theme)

  return (
    <ComponentDocs
      {...tooltipDocsProps}
      preview={{
        configurator: tooltipConfigurator,
        children: <TooltipPreview />,
      }}
    />
  )
}

export default AtomTooltip
