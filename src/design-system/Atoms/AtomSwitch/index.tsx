import { Center, Group, Stack, Switch, useMantineTheme } from "@mantine/core"
import getSwitchConfigurator from "src/design-system/Configurator/configurators/switch"

import { IconSun, IconMoonStars, IconCheck, IconX } from "@tabler/icons-react"
import { useState } from "react"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import SwitchPreview from "./SwitchPreview"

const ThumbSwitch = () => {
  const theme = useMantineTheme()
  const [checked, setChecked] = useState(false)
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size="0.8rem" color={theme.colors.teal[theme.fn.primaryShade()]} stroke={3} />
        ) : (
          <IconX size="0.8rem" color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
        )
      }
    />
  )
}

const switchComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Switch",
  description: `A switch is used to quickly switch between two possible states. They are commonly used for “on/off” toggles.`,
  mantineLink: "https://mantine.dev/core/switch",
  examples: [
    {
      title: "Label position",
      description: `You can use different label positions depending on the layout where you use switch.`,
      children: (
        <Stack align="center">
          {["left", "right"].map((position) => (
            <Switch
              label="Switch's label"
              labelPosition={position as "left" | "right"}
              key={position}
            />
          ))}
        </Stack>
      ),
    },
    {
      title: "Inner labels",
      description: `You can use inner labels to help users understand what's the current state of the switch`,
      children: (
        <Group position="center">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Switch key={size} size={size} onLabel="ON" offLabel="OFF" />
          ))}
        </Group>
      ),
    },
    {
      title: "Icon labels",
      description: `Icon labels have the same purpose as text labels, but can be better solution when you can't describe the switch's purpose shortly`,
      children: (
        <Group position="center">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Switch
              key={size}
              size={size}
              onLabel={<IconSun size="1rem" stroke={2.5} />}
              offLabel={<IconMoonStars size="1rem" stroke={2.5} />}
            />
          ))}
        </Group>
      ),
    },
    {
      title: "Thumb icons",
      description: `Thumbs are another way to display icons to show switch's state`,
      children: (
        <Center>
          <ThumbSwitch />
        </Center>
      ),
    },
    {
      title: "Switch.Group",
      description: `Use Switch.Group when you have multiple togglable parameters with close meaning`,
      children: (
        <Center>
          <Switch.Group
            defaultValue={["react"]}
            label="Select your favorite framework/library"
            description="This is anonymous"
            withAsterisk
          >
            <Group mt="xs">
              {["React", "Svelte", "Angular", "Vue"].map((label) => (
                <Switch key={label} value={label} label={label} />
              ))}
            </Group>
          </Switch.Group>
        </Center>
      ),
    },
  ],
}

const AtomSwitch = () => {
  const theme = useMantineTheme()
  const switchConfigurator = getSwitchConfigurator(theme)
  return (
    <ComponentDocs
      {...switchComponentDocsProps}
      preview={{
        configurator: switchConfigurator,
        children: <SwitchPreview />,
      }}
    />
  )
}

export default AtomSwitch
