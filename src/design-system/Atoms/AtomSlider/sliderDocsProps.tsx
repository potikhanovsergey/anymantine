import { Stack, Group, Slider, Text } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

const sliderDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Slider",
  description: `Sliders allow users to quickly select a value within a range.
  They should be used when the upper and lower bounds to the range are invariable.`,
  mantineLink: "https://mantine.dev/core/slider",
  examples: [
    {
      title: "Size",
      description: `Sliders come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack align="center">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Slider
                marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
                maw={200}
                size={size}
                w="100%"
              />
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Disabled",
      description: `A slider in a disabled state shows that a slider exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: (
        <Slider
          marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
          w="100%"
          miw={200}
          defaultValue={70}
          disabled
        />
      ),
    },
  ],
}

export default sliderDocsProps
