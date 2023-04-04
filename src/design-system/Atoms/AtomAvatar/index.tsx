import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getAvatarConfigurator from "src/design-system/Configurator/configurators/avatar"
import avatarDocsProps from "./avatarDocsProps"
import AvatarPreview from "./AvatarPreview"

const AtomAvatar = () => {
  const theme = useMantineTheme()
  const avatarConfigurator = getAvatarConfigurator(theme)
  return (
    <ComponentDocs
      {...avatarDocsProps}
      preview={{
        configurator: avatarConfigurator,
        children: <AvatarPreview />,
      }}
    />
  )
}

export default AtomAvatar
