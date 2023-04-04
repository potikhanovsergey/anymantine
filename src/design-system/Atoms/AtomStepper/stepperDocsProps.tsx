import { StepperProps, Stepper, Center, Stack, Text } from "@mantine/core"
import {
  IconCircleCheck,
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
} from "@tabler/icons-react"
import { useState } from "react"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

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

const stepperDocsProps: Omit<ComponentDocsProps, "preview"> = {
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

export default stepperDocsProps
