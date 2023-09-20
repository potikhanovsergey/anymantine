import {
  Stack,
  Text,
  Button,
  useMantineTheme,
  Checkbox,
  Radio,
  Switch,
  TextInput,
  Group,
  Center,
} from "@mantine/core"
import PageTitle from "src/design-system/layout/PageTitle"
import { ExampleProps } from "src/design-system/Examples/Example"
import Examples from "src/design-system/Examples/Examples"
import PageSubtitle from "src/design-system/layout/PageSubtitle"

const HoveredState = ({ variant }: { variant: string }) => {
  const theme = useMantineTheme()
  const buttonStyles = theme.components?.Button

  // const hoverStyles = buttonStyles?.variants?.[variant]?.(theme, {}, {})?.root?.[
  //   "&:not([data-disabled])"
  // ]?.["@media (hover: hover)"]?.["&:hover"]
  const hoverStyles = {}

  return (
    <Button variant={variant} style={hoverStyles}>
      Action
    </Button>
  )
}

const FocusedState = ({ variant }: { variant: string }) => {
  const theme = useMantineTheme()
  return (
    <Button
      variant={variant}
      style={
        {
          // ...theme.fn.focusStyles()["&:focus"],
        }
      }
    >
      Action
    </Button>
  )
}

const States = () => {
  const theme = useMantineTheme()
  const buttonStyles = theme.components?.Button
  const variants = Object.keys(buttonStyles?.variants!)

  const examples: ExampleProps[] = [
    {
      title: "Default",
      description: "This is the default state of a component or item when not interacted with.",
      children: (
        <Group justify="center">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              Action
            </Button>
          ))}
        </Group>
      ),
    },
    {
      title: "Hover",
      description: `A hover state is initiated by the user and appears when the user places their cursor
      over an interactive item.`,
      children: (
        <Group justify="center">
          {variants.map((variant) => (
            <HoveredState variant={variant} key={variant} />
          ))}
        </Group>
      ),
    },
    {
      title: "Keyboard Focus",
      description: `Keyboard focus is initiated by the user and highlights an item when navigated using a
      keyboard. The keyboard focus state typically takes the component’s visual hover state
      and adds an additional indication, most commonly a 2px blue ring around the component.`,
      children: (
        <Group justify="center">
          {variants.map((variant) => (
            <FocusedState variant={variant} key={variant} />
          ))}
        </Group>
      ),
    },
    {
      title: "Disabled",
      description: `A disabled state is initiated by a component option. It shows that the item exists,
      but is not interactive in that circumstance. This state can be used to maintain layout
      continuity and to communicate that an action may become available later.`,
      children: (
        <Center>
          <Button disabled>Action</Button>
        </Center>
      ),
    },
    {
      title: "Selected",
      description: `A selected state is initiated by a component option. It is used to communicate a
      user’s choice.`,
      children: (
        <Stack align="center">
          <Checkbox defaultChecked />
          <Radio defaultChecked />
          <Switch defaultChecked />
        </Stack>
      ),
    },
    {
      title: "Error",
      description: `An error state is initiated by a component option. It is used to communicate an error
      made by the system or the user. Most commonly, this means that the item needs to be
      completed before moving forward or that an input is invalid.`,
      children: (
        <TextInput
          label="Password"
          defaultValue="qwerty"
          error="Password must be at least 8 characters"
        />
      ),
    },
  ]
  return (
    <>
      <PageTitle>States</PageTitle>
      <Text mb="md">
        A state communicates the status or potential of a component or an interactive item to the
        user.
      </Text>
      <PageSubtitle mb={40}>Examples</PageSubtitle>
      <Examples examples={examples} />
    </>
  )
}

export default States
