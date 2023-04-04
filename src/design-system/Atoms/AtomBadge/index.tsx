import { useMantineTheme } from "@mantine/core"
import getBadgeConfigurator from "src/design-system/Configurator/configurators/badge"
import BadgePreview from "./BadgePreview"
import ComponentDocs from "src/design-system/ComponentDocs"
import badgeDocsProps from "./badgeDocsProps"

const AtomBadge = () => {
  const theme = useMantineTheme()
  const badgeConfigurator = getBadgeConfigurator(theme)

  return (
    <ComponentDocs
      {...badgeDocsProps}
      preview={{
        configurator: badgeConfigurator,
        children: <BadgePreview />,
      }}
    />
  )
}

export default AtomBadge
