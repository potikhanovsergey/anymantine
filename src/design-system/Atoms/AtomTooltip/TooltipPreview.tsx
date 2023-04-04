import { Stack, Tooltip, ActionIcon, Mark, Text } from "@mantine/core"
import ExampleIcon from "src/design-system/ExampleIcon"

const TooltipPreview = () => {
  return (
    <Stack>
      <Tooltip label="Make love">
        <ActionIcon>
          <ExampleIcon />
        </ActionIcon>
      </Tooltip>
      <Text maw={400}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deleniti neque amet, eius
        totam inventore{" "}
        <Tooltip inline label="Ipsum is ...">
          <Mark>ipsum</Mark>
        </Tooltip>
        , dolor sit amet consectetur adipisicing elit. Maiores, aut.
      </Text>
    </Stack>
  )
}

export default TooltipPreview
