import { Group, Text, Stack, Avatar, SegmentedControl } from "@mantine/core"
import { DesignTheme } from "src/state/design-system"
import { IconHeart } from "@tabler/icons-react"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getSegmentedControlConfigurator from "../Configurator/configurators/segmented-control"

export const segmentedControlDataMock = [
  { label: "React", value: "react" },
  { label: "Angular", value: "ng" },
  { label: "Vue", value: "vue" },
]

const segmentedControlComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "SegmentedControl",
  description: `SegementedControl let user choose one of controls options. Unlike tabs, segemented control
  will not change section, but save the chosen option for later use.`,
  mantineLink: "https://mantine.dev/core/segmented-control",
  examples: [
    {
      title: "Size",
      description: `Segemented-controls come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack w="75%">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Stack w="100%" key={size}>
              <Text color="dimmed">{size}</Text>
              <SegmentedControl tabIndex={-1} size={size} data={segmentedControlDataMock} />
            </Stack>
          ))}
        </Stack>
      ),
    },
    {
      title: "Orientation",
      description: `Segemented-controls come in two orientations: horizontal and vertical. Use them to fit in your page nice.`,
      children: (
        <Stack w="75%">
          {["horizontal", "vertical"].map((orientation: "horizontal" | "vertical") => (
            <Stack w="100%" key={orientation}>
              <Text color="dimmed">{orientation}</Text>
              <SegmentedControl
                tabIndex={-1}
                orientation={orientation}
                data={segmentedControlDataMock}
              />
            </Stack>
          ))}
        </Stack>
      ),
    },
    {
      title: "Full width",
      description: `By default, the segmented-control depends on the label and/or icon inside of each segment. When a segment is justified, it takes up the entire available container width.`,
      children: <SegmentedControl data={segmentedControlDataMock} fullWidth />,
    },
    {
      title: "Disabled",
      description: `A segmented-control in a disabled state shows that an action exists, but is not available in that circumstance. This state can be used to maintain layout continuity and to communicate that an action may become available later.`,
      children: <SegmentedControl data={segmentedControlDataMock} disabled />,
    },
  ],
}

const AtomSegmentedControl = () => {
  const segmentedControlConfigurator = getSegmentedControlConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...segmentedControlComponentDocsProps}
      preview={{
        title: "Avatar",
        configurator: segmentedControlConfigurator,
        children: <SegmentedControl data={segmentedControlDataMock} />,
      }}
    />
  )
}

export default AtomSegmentedControl