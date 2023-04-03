import { Group, ActionIcon } from "@mantine/core"
import ExampleIcon from "src/design-system/ExampleIcon"

const ActionIconPreview = () => {
  return (
    <Group>
      {["primary", "secondary", "transparent"].map((variant) => (
        <ActionIcon key={variant} variant={variant}>
          <ExampleIcon />
        </ActionIcon>
      ))}
    </Group>
  )
}

export default ActionIconPreview
