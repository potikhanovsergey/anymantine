import { Group, Text, Stack, Avatar } from "@mantine/core"
import { DesignTheme } from "src/state/design-system"
import { IconHeart } from "@tabler/icons-react"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getAvatarConfigurator from "../Configurator/configurators/avatar"

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
              <Avatar tabIndex={-1} variant={variant}>
                DS
              </Avatar>
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Size",
      description: `Avatars come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack align="center">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="center" key={size}>
              <Text color="dimmed">{size}</Text>
              <Avatar tabIndex={-1} size={size}>
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
  const avatarConfigurator = getAvatarConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...avatarComponentDocsProps}
      preview={{
        configurator: avatarConfigurator,
        children: (
          <Group>
            <Avatar
              src="https://ucarecdn.com/c7a89916-f499-4fb9-90da-cb89f738c59a/"
              alt="it's me"
            />
            <Avatar />
            <Avatar>MK</Avatar>
            <Avatar>
              <IconHeart size="1.5rem" />
            </Avatar>
          </Group>
        ),
      }}
    />
  )
}

export default AtomAvatar
