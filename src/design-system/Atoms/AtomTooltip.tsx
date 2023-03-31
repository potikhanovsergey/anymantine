import { ActionIcon, Group, Tooltip, Text, Mark, Button, Box, Stack } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import getTooltipConfigurator from "src/design-system/Configurator/configurators/tooltip"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import ExampleIcon from "../ExampleIcon"

const tooltipDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Tooltip",
  description: `Tooltips display additional information upon hover or focus. The information included should be contextual, helpful, and nonessential while providing that extra ability to communicate and give clarity to a user.`,
  mantineLink: "https://mantine.dev/core/tooltip",
  examples: [
    {
      title: "withArrow prop",
      description: `withArrow prop determines whether tooltip should have an arrow`,
      children: (
        <Group spacing="xl">
          <Tooltip label="With arrow" withArrow>
            <Button size="xs">With arrow</Button>
          </Tooltip>
          <Tooltip label="Without arrow" withArrow={false}>
            <Button size="xs">Without arrow</Button>
          </Tooltip>
        </Group>
      ),
    },
    {
      title: "multiline prop",
      description: `To enable multiline mode set multiline prop to enable line breaks and width prop to set tooltip width.`,
      children: (
        <Group spacing="xl">
          <Tooltip
            multiline
            width={220}
            withArrow
            transitionProps={{ duration: 200 }}
            label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
          >
            <Button size="xs">Multiline tooltip</Button>
          </Tooltip>
        </Group>
      ),
    },
    {
      title: "Close and open delay",
      description: `You can delay tooltip open/close events by setting openDelay and closeDelay props in ms`,
      children: (
        <Group spacing="xl">
          <Tooltip label="Opened after 500ms" openDelay={500}>
            <Button size="xs">Delay open - 500ms</Button>
          </Tooltip>

          <Tooltip label="Closes after 500ms" closeDelay={500}>
            <Button size="xs">Delay close - 500ms</Button>
          </Tooltip>
        </Group>
      ),
    },
    {
      title: "Tooltip.Group",
      description: `Tooltip.Group component can be used to sync open and close delays for multiple tooltips.`,
      children: (
        <Group spacing="xl">
          <Tooltip.Group openDelay={500} closeDelay={100}>
            <Group position="center">
              {[1, 2, 3].map((tooltip) => (
                <Tooltip key={tooltip} label={`Tooltip ${tooltip}`}>
                  <Button size="xs">Button {tooltip}</Button>
                </Tooltip>
              ))}
            </Group>
          </Tooltip.Group>
        </Group>
      ),
    },
    {
      title: "Tooltip.Floating",
      description: `Tooltip.Floating component has the same API as Tooltip component but tooltip will follow mouse.`,
      children: (
        <Group spacing="xl">
          <Tooltip.Floating label="Tooltip" color="blue">
            <Box
              sx={(theme) => ({
                padding: theme.spacing.xl,
                cursor: "default",
                backgroundColor:
                  theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
              })}
            >
              Hover over the box to see tooltip
            </Box>
          </Tooltip.Floating>
        </Group>
      ),
    },
  ],
}

const AtomTooltips = () => {
  const tooltipConfigurator = getTooltipConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...tooltipDocsProps}
      preview={{
        configurator: tooltipConfigurator,
        children: (
          <Stack>
            <Tooltip label="Make love">
              <ActionIcon>
                <ExampleIcon />
              </ActionIcon>
            </Tooltip>
            <Text maw={400}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deleniti neque amet,
              eius totam inventore{" "}
              <Tooltip inline label="Ipsum is ...">
                <Mark>ipsum</Mark>
              </Tooltip>
              , dolor sit amet consectetur adipisicing elit. Maiores, aut.
            </Text>
          </Stack>
        ),
      }}
    />
  )
}

export default AtomTooltips
