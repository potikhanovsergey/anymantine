import { Group, Button, Text, Stack, Avatar, Slider } from "@mantine/core"
import getButtonConfigurator from "src/design-system/Configurator/configurators/button"
import { DesignTheme } from "src/state/design-system"
import { IconDownload, IconHeart, IconStar } from "@tabler/icons-react"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getAvatarConfigurator from "../Configurator/configurators/avatar"
import getSliderConfigurator from "../Configurator/configurators/slider"

const sliderComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Slider",
  description: `Sliders allow users to quickly select a value within a range.
  They should be used when the upper and lower bounds to the range are invariable.`,
  mantineLink: "https://mantine.dev/core/slider",
  examples: [
    {
      title: "Size",
      description: `Sliders come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      children: (
        <Stack w="75%">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group w="100%" position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Slider
                marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
                maw={200}
                tabIndex={-1}
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
        <Group>
          <Slider
            marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
            w="100%"
            miw={200}
            defaultValue={70}
            disabled
          />
        </Group>
      ),
    },
  ],
}

const AtomSlider = () => {
  const sliderConfigurator = getSliderConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...sliderComponentDocsProps}
      preview={{
        title: "Slider",
        configurator: sliderConfigurator,
        children: <Slider marks={[{ value: 20 }, { value: 50 }, { value: 80 }]} w="100%" />,
      }}
    />
  )
}

export default AtomSlider
