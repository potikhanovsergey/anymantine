import {
  Group,
  Stack,
  TextInput,
  Text,
  Loader,
  Button,
  Stepper,
  StepperProps,
  Center,
} from "@mantine/core"
import {
  IconCircleCheck,
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
} from "@tabler/icons-react"
import { useState } from "react"
import getTextInputConfigurator from "src/design-system/Configurator/configurators/text-input"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"
import getStepperConfigurator from "../Configurator/configurators/stepper"
import ExampleIcon from "../ExampleIcon"

type SteperExampleProps = Pick<StepperProps, "orientation" | "iconPosition"> & {
  loading?: boolean
  withIcons?: boolean
}

const StepperExample = ({
  orientation = "horizontal",
  withIcons = false,
  iconPosition = "left",
  loading = false,
}: SteperExampleProps) => {
  const [active, setActive] = useState(1)

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={withIcons && <IconCircleCheck />}
      orientation={orientation}
      iconPosition={iconPosition}
    >
      <Stepper.Step
        icon={withIcons && <IconUserCheck size="1.1rem" />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={withIcons && <IconMailOpened size="1.1rem" />}
        label="Step 2"
        description="Verify email"
        loading={loading}
      />
      <Stepper.Step
        icon={withIcons && <IconShieldCheck size="1.1rem" />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  )
}

const stepperComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Stepper",
  description: `Steppers display progress through a sequence of logical and numbered steps.
  They may also be used for navigation.`,
  mantineLink: "https://mantine.dev/core/stepper",
  examples: [
    {
      title: "With custom icon",
      description: `You can use a custom icon in your steps to make their idea more clear to users.`,
      children: <StepperExample withIcons />,
    },
    {
      title: "Vertical orientation",
      description: `You can set stepper orientation to vertical, if it will better fit your application page.`,
      children: (
        <Center>
          <StepperExample orientation="vertical" />
        </Center>
      ),
    },
    {
      title: "Loading",
      description: `You can pass steps loading prop - for example, while you check all of the things needed to
      move to the next step.`,
      children: <StepperExample loading={true} />,
    },
    {
      title: "Icon position",
      description: `You can change the icon position if you like.`,
      children: (
        <Stack>
          {["left", "right"].map((position: "left" | "right") => (
            <Stack key={position}>
              <Text mb="sm" color="dimmed">
                {position}
              </Text>
              <StepperExample iconPosition={position} />
            </Stack>
          ))}
        </Stack>
      ),
    },
  ],
}

const AtomStepper = () => {
  const stepperConfigurator = getStepperConfigurator(DesignTheme.peek())

  const [active, setActive] = useState(1)
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <ComponentDocs
      {...stepperComponentDocsProps}
      preview={{
        configurator: stepperConfigurator,
        children: (
          <Stack>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
              <Stepper.Step label="First step" description="Create an account">
                Step 1 content: Create an account
              </Stepper.Step>
              <Stepper.Step label="Second step" description="Verify email">
                Step 2 content: Verify email
              </Stepper.Step>
              <Stepper.Step label="Final step" description="Get full access">
                Step 3 content: Get full access
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep}>Next step</Button>
            </Group>
          </Stack>
        ),
      }}
    />
  )
}

export default AtomStepper
