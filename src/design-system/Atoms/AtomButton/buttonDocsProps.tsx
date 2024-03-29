import { Stack, Button, Group, Box, Text } from "@mantine/core"
import { IconDownload } from "@tabler/icons-react"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

const buttonDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Button",
  description: `Buttons allow users to perform an action or to navigate to another page. They have
  multiple styles for various needs, and are ideal for calling attention to where a user
  needs to do something in order to move forward in a flow.`,
  mantineLink: "https://mantine.dev/core/button",
  examples: [
    {
      title: "Label and icon",
      description: `Buttons should always have a label, unless they are only using an icon that is universally understood
      and accessible. They can have an optional icon, but it should not be used for decoration.
       Use an icon only when necessary and when it has a strong association with the label text.`,
      code: `
import { Button, Stack } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react"

const Example = () => {
  return (
    <Stack align="center">
      <Button
        leftIcon={<IconDownload size={16} />}
      >
        With icon
      </Button>
      <Button>Without icon</Button>
  </Stack>
  )
}`,
      children: (
        <Stack align="center">
          <Button leftIcon={<IconDownload size={16} />}>With icon</Button>
          <Button>Without icon</Button>
        </Stack>
      ),
    },
    {
      title: "Negative button",
      description: `The negative button is for emphasizing actions that can be destructive or have negative consequences if taken. Use it sparingly.`,
      code: `
import { Button, Stack } from "@mantine/core";

const Example = () => {
  return (
    <Stack align="center">
      <Button color="red" variant="primary">
        Destructive action
      </Button>
      <Button color="red" variant="secondary">
        Destructive action
      </Button>
  </Stack>
  )
}`,
      children: (
        <Stack align="center">
          <Button color="red" variant="primary">
            Destructive action
          </Button>
          <Button color="red" variant="secondary">
            Destructive action
          </Button>
        </Stack>
      ),
    },
    {
      title: "Variants",
      description: `Buttons are available in primary and secondary styles. Use primary buttons for the most important actions on the website and secondary buttons for everything else.`,
      code: `
import { Button, Stack, Group } from "@mantine/core";

const Example = () => {
  return (
    <Group position="center" noWrap>
      <Stack align="center">
        {[undefined, "green", "red", "gray"].map((color) => (
          <Button color={color} variant="primary" key={color || ""}>
            Action
          </Button>
        ))}
      </Stack>

      <Stack align="center">
        {[undefined, "green", "red", "gray"].map((color) => (
          <Button color={color} variant="secondary" key={color || ""}>
            Action
          </Button>
        ))}
      </Stack>
    </Group>
  )
}`,
      children: (
        <Group position="center" noWrap>
          <Stack>
            <Text mb="sm" color="dimmed">
              Primary
            </Text>
            {[undefined, "green", "red", "gray"].map((color) => (
              <Button color={color} variant="primary" key={color || ""}>
                Action
              </Button>
            ))}
          </Stack>
          <Stack>
            <Text mb="sm" color="dimmed">
              Secondary
            </Text>
            {[undefined, "green", "red", "gray"].map((color) => (
              <Button color={color} variant="secondary" key={color || ""}>
                Action
              </Button>
            ))}
          </Stack>
        </Group>
      ),
    },
    {
      title: "Size",
      description: `Buttons come in five different sizes: extra-small, small, medium, large, and extra-large. Use the sizes sparingly; they should be used to create a hierarchy of importance within the page.`,
      code: `
import { Button, Stack } from "@mantine/core";

const Example = () => {
  return (
    <Stack align="center">
      {["xs", "sm", "md", "lg", "xl"].map((size) => (
        <Button size={size} key={size}>Action</Button>
      ))}
  </Stack>
  )
}`,
      children: (
        <Stack>
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Group position="apart" key={size}>
              <Text color="dimmed">{size}</Text>
              <Button size={size}>Action</Button>
            </Group>
          ))}
        </Stack>
      ),
    },
    {
      title: "Full width",
      description: `By default, the button size depends on the label and/or icon inside of each button. When a button is justified, it takes up the entire available container width.`,
      code: `
import { Button, Stack } from "@mantine/core";

const Example = () => {
  return (
    <Stack align="center">
      <Button fullWidth variant="primary">
        Action
      </Button>
      <Button fullWidth variant="secondary">
        Action
      </Button>
  </Stack>
  )
}`,
      children: (
        <Stack align="center">
          {["primary", "secondary"].map((variant) => (
            <Box w="100%" key={variant}>
              <Text color="dimmed">{variant}</Text>
              <Button fullWidth variant={variant}>
                Action
              </Button>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      title: "Loading",
      description: `Buttons can indicate that a quick progress taking place (e.g., saving settings on a server). In this case, the label and optional icon disappear and a progress circle appears. The progress circle always shows an indeterminate progress.`,
      code: `
import { Button, Stack } from "@mantine/core";

const Example = () => {
  return (
    <Stack align="center">
      <Button loading variant="primary">
        Action
      </Button>
      <Button loading variant="secondary">
        Action
      </Button>
  </Stack>
  )
}`,
      children: (
        <Group position="center">
          {["primary", "secondary"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed">{variant}</Text>
              <Button loading variant={variant}>
                Action
              </Button>
            </Stack>
          ))}
        </Group>
      ),
    },
    {
      title: "Disabled",
      description: `A button in a disabled state shows that an action exists, but is not available in that circumstance. This state can be used to maintain layout continuity and to communicate that an action may become available later.`,
      code: `
import { Button, Stack } from "@mantine/core";

const Example = () => {
  return (
    <Stack align="center">
      <Button disabled variant="primary">
        Action
      </Button>
      <Button disabled variant="secondary">
        Action
      </Button>
  </Stack>
  )
}`,
      children: (
        <Group position="center">
          {["primary", "secondary"].map((variant) => (
            <Stack key={variant}>
              <Text color="dimmed">{variant}</Text>
              <Button disabled variant={variant}>
                Action
              </Button>
            </Stack>
          ))}
        </Group>
      ),
    },
  ],
}

export default buttonDocsProps
