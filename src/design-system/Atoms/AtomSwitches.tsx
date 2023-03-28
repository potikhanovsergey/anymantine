import { Group, Stack, Switch, useMantineTheme } from "@mantine/core"
import getSwitchConfigurator from "src/design-system/Configurator/configurators/switch"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import { IconSun, IconMoonStars, IconCheck, IconX } from "@tabler/icons-react"
import { useState } from "react"

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
  examples: [
    {
      title: "Label position",
      description: `You can use different label positions depending on the layout where you use switch.`,
      children: (
        <Stack>
          {["left", "right"].map((position) => (
            <Switch
              label="Switch's label"
              labelPosition={position as "left" | "right"}
              size="md"
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
        <Group>
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
        <Group>
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
      children: <ThumbSwitch />,
    },
    {
      title: "Switch.Group",
      description: `Use Switch.Group when you have multiple togglable parameters with close meaning`,
      children: (
        <Switch.Group
          defaultValue={["react"]}
          label="Select your favorite framework/library"
          description="This is anonymous"
          withAsterisk
        >
          <Group mt="xs">
            <Switch value="react" label="React" />
            <Switch value="svelte" label="Svelte" />
            <Switch value="ng" label="Angular" />
            <Switch value="vue" label="Vue" />
          </Group>
        </Switch.Group>
      ),
    },
  ],
}

const AtomSwitches = () => {
  const switchConfigurator = getSwitchConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...switchComponentDocsProps}
      preview={{
        title: "Switch",
        mantineLink: "https://mantine.dev/core/switch",
        configurator: switchConfigurator,
        children: (
          <Stack>
            <Switch label="Label" />
            <Switch label="Label" description="Description" labelPosition="right" />
            <Switch label="Label" description="Description" error="Error" labelPosition="right" />
            <Switch label="Label" description="Description" labelPosition="right" disabled />
            <Switch.Group
              defaultValue={["mango"]}
              label="Select your favorite fruits"
              description="This is anonymous"
              withAsterisk
            >
              <Group mt="xs">
                <Switch value="kiwi" label="Kiwi" />
                <Switch value="mango" label="Mango" />
                <Switch value="apple" label="Apple" />
                <Switch value="banana" label="Banana" />
              </Group>
            </Switch.Group>
          </Stack>
        ),
      }}
    />
  )
}

export default AtomSwitches
