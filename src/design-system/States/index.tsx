import { observer } from "@legendapp/state/react"
import {
  Box,
  Stack,
  Text,
  Group,
  Center,
  Button,
  Title,
  useMantineTheme,
  MantineProvider,
  Checkbox,
  Radio,
  Switch,
  TextInput,
} from "@mantine/core"
import { useEffect } from "react"
import { DesignTheme } from "src/state/design-system"

const DefaultState = ({ variant }: { variant: string }) => {
  const theme = useMantineTheme()
  return <Button variant={variant}>Действие</Button>
}

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

const FocusState = ({ variant }: { variant: string }) => {
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

  useEffect(() => {
    console.log(buttonStyles)
  }, [])
  return buttonStyles ? (
    <Box>
      <Text mb="md">
        Состояние сообщает пользователю статус компонента или интерактивного элемента.
      </Text>
      <Title order={2} mb={40}>
        Виды состояний
      </Title>
      <Stack spacing={64}>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              {Object.keys(buttonStyles?.variants!)?.map((buttonVariant) => (
                <DefaultState variant={buttonVariant} key={buttonVariant} />
              ))}
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>По умолчанию</Title>
            <Text>This is the default state of a component or item when not interacted with.</Text>
          </Box>
        </Group>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              {Object.keys?.(buttonStyles?.variants!)?.map((buttonVariant) => (
                <HoveredState variant={buttonVariant} key={buttonVariant} />
              ))}
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>Наведение</Title>
            <Text>
              A hover state is initiated by the user and appears when the user places their cursor
              over an interactive item.
            </Text>
          </Box>
        </Group>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              {Object.keys?.(buttonStyles?.variants!)?.map((buttonVariant) => (
                <FocusState variant={buttonVariant} key={buttonVariant} />
              ))}
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>Фокус с клавиатуры</Title>
            <Text>
              Keyboard focus is initiated by the user and highlights an item when navigated using a
              keyboard. The keyboard focus state typically takes the component’s visual hover state
              and adds an additional indication, most commonly a 2px blue ring around the component.
            </Text>
          </Box>
        </Group>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              {Object.keys?.(buttonStyles?.variants!)?.map((buttonVariant) => (
                <Button variant={buttonVariant} disabled key={buttonVariant}>
                  Действие
                </Button>
              ))}
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>Disabled</Title>
            <Text>
              A disabled state is initiated by a component option. It shows that the item exists,
              but is not interactive in that circumstance. This state can be used to maintain layout
              continuity and to communicate that an action may become available later.
            </Text>
          </Box>
        </Group>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              <Checkbox defaultChecked />
              <Radio defaultChecked />
              <Switch defaultChecked />
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>Selected</Title>
            <Text>
              A selected state is initiated by a component option. It is used to communicate a
              user’s choice.
            </Text>
          </Box>
        </Group>
        <Group noWrap grow>
          <Group position="center">
            <MantineProvider theme={DesignTheme.peek()}>
              <TextInput
                label="Password"
                defaultValue="qwerty"
                error="Password must be at least 8 characters"
              />
            </MantineProvider>
          </Group>
          <Box>
            <Title order={3}>Error</Title>
            <Text>
              An error state is initiated by a component option. It is used to communicate an error
              made by the system or the user. Most commonly, this means that the item needs to be
              completed before moving forward or that an input is invalid.
            </Text>
          </Box>
        </Group>
      </Stack>
    </Box>
  ) : (
    <></>
  )
}

export default observer(States)
