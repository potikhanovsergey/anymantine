import { observer } from "@legendapp/state/react"
import {
  Stack,
  Text,
  Button,
  Title,
  useMantineTheme,
  Checkbox,
  Radio,
  Switch,
  TextInput,
} from "@mantine/core"
import { DesignTheme } from "src/state/design-system"
import Example from "../Example"
import DesignSystemProvider from "src/design-system/DesignSystemProvider"

const HoveredState = ({ variant }: { variant: string }) => {
  const buttonStyles = DesignTheme.get?.()?.components?.Button
  const theme = useMantineTheme()

  return (
    <Button
      variant={variant}
      sx={{
        ...buttonStyles?.variants![variant](theme, {}, {}).root["&:not([data-disabled])"]?.[
          "@media (hover: hover)"
        ]?.["&:hover"],
      }}
    >
      Действие
    </Button>
  )
}

const FocusedState = ({ variant }: { variant: string }) => {
  const theme = useMantineTheme()
  return (
    <Button
      variant={variant}
      sx={{
        ...theme.fn.focusStyles()["&:focus"],
      }}
    >
      Действие
    </Button>
  )
}

const States = () => {
  const buttonStyles = DesignTheme.get?.()?.components?.Button

  return (
    <div>
      <Text mb="md">
        Состояние сообщает пользователю статус компонента или интерактивного элемента.
      </Text>
      <Title order={2} mb={40}>
        Виды состояний
      </Title>
      <Stack spacing={64}>
        <Example
          title="Default"
          description="This is the default state of a component or item when not interacted with."
        >
          {Object.keys(buttonStyles?.variants!)?.map((variant) => (
            <Button key={variant} variant={variant}>
              Действие
            </Button>
          ))}
        </Example>

        <Example
          title="Hover"
          description="A hover state is initiated by the user and appears when the user places their cursor
          over an interactive item."
        >
          {Object.keys?.(buttonStyles?.variants!)?.map((variant) => (
            <HoveredState variant={variant} key={variant} />
          ))}
        </Example>
        <Example
          title="Keyboard Focus"
          description="Keyboard focus is initiated by the user and highlights an item when navigated using a
          keyboard. The keyboard focus state typically takes the component’s visual hover state
          and adds an additional indication, most commonly a 2px blue ring around the component."
        >
          {Object.keys?.(buttonStyles?.variants!)?.map((variant) => (
            <FocusedState variant={variant} key={variant} />
          ))}
        </Example>
        <Example
          title="Disabled"
          description="A disabled state is initiated by a component option. It shows that the item exists,
          but is not interactive in that circumstance. This state can be used to maintain layout
          continuity and to communicate that an action may become available later."
        >
          {Object.keys?.(buttonStyles?.variants!)?.map((variant) => (
            <Button variant={variant} disabled key={variant}>
              Действие
            </Button>
          ))}
        </Example>
        <Example
          title="Selected"
          description="A selected state is initiated by a component option. It is used to communicate a
          user’s choice."
        >
          <Checkbox defaultChecked />
          <Radio defaultChecked />
          <Switch defaultChecked />
        </Example>
        <Example
          title="Error"
          description="An error state is initiated by a component option. It is used to communicate an error
          made by the system or the user. Most commonly, this means that the item needs to be
          completed before moving forward or that an input is invalid."
        >
          <TextInput
            label="Password"
            defaultValue="qwerty"
            error="Password must be at least 8 characters"
          />
        </Example>
      </Stack>
    </div>
  )
}

export default observer(States)
