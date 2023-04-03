import { Group, Text, Stack, Avatar, useMantineTheme } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getAvatarConfigurator from "src/design-system/Configurator/configurators/avatar"
import AvatarPreview from "./AvatarPreview"

const avatarComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Avatar",
  description: `An avatar is a thumbnail representation of an entity, such as a user or an organization.`,
  mantineLink: "https://mantine.dev/core/avatar",
  examples: [
    {
      title: "Variants",
      description: `Avatars are available in either light, fill or outline styles. An avatar in the fill style has a solid background, since it’s meant to be intentionally more prominent than an avatar in the outline style. Light style simular to filled, but it is not so bright.`,
      children: (
        <Group position="center">
          {["light", "filled", "outline"].map((variant) => (
            <Stack key={variant}>
              <Text mb="sm" color="dimmed" tt="capitalize">
                {variant}
              </Text>
              <Avatar variant={variant}>DS</Avatar>
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Size",
      description: `Avatars come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Avatar radius={1000} size={size}>
                DS
              </Avatar>
            </Group>
          ))}
        </Stack>
      ),
    },
  ],
}

const AtomAvatar = () => {
  const theme = useMantineTheme()
  const avatarConfigurator = getAvatarConfigurator(theme)
  return (
    <ComponentDocs
      {...avatarComponentDocsProps}
      preview={{
        configurator: avatarConfigurator,
        children: <AvatarPreview />,
      }}
    />
  )
}

export default AtomAvatar
