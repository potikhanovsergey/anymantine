import { Group, Tooltip, Button, Center, Box } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

const tooltipDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Tooltip",
  description: `Tooltips display additional information upon hover or focus. The information included should be contextual, helpful, and nonessential while providing that extra ability to communicate and give clarity to a user.`,
  mantineLink: "https://mantine.dev/core/tooltip",
  examples: [
    {
      title: "withArrow prop",
      description: `withArrow prop determines whether tooltip should have an arrow.`,
      children: (
        <Group justify="center">
          {[false, true].map((withArrow) => (
            <Tooltip
              key={withArrow + ""}
              label={`${withArrow ? "With" : "Without"} arrow`}
              withArrow={withArrow}
            >
              <Button size="xs">{withArrow ? "With" : "Without"} arrow</Button>
            </Tooltip>
          ))}
        </Group>
      ),
    },
    {
      title: "multiline prop",
      description: `To enable multiline mode set multiline prop to enable line breaks and width prop to set tooltip width.`,
      children: (
        <Center>
          <Tooltip
            multiline
            w={220}
            withArrow
            transitionProps={{ duration: 200 }}
            label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
          >
            <Button size="xs">Multiline tooltip</Button>
          </Tooltip>
        </Center>
      ),
    },
    {
      title: "Close and open delay",
      description: `You can delay tooltip open/close events by setting openDelay and closeDelay props in ms.`,
      children: (
        <Group justify="center">
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
        <Group justify="center">
          <Tooltip.Group openDelay={500} closeDelay={100}>
            <Group justify="center">
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
        <Group justify="center">
          <Tooltip.Floating label="Tooltip" color="blue">
            <Box
              style={(theme) => ({
                padding: theme.spacing.xl,
                cursor: "default",
                backgroundColor: theme.colors.green[4],
                color: theme.black,
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

export default tooltipDocsProps
