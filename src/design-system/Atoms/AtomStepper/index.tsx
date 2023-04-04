import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getStepperConfigurator from "src/design-system/Configurator/configurators/stepper"
import stepperDocsProps from "./stepperDocsProps"

import StepperPreview from "./StepperPreview"

const AtomStepper = () => {
  const theme = useMantineTheme()
  const stepperConfigurator = getStepperConfigurator(theme)

  return (
    <ComponentDocs
      {...stepperDocsProps}
      preview={{
        configurator: stepperConfigurator,
        children: <StepperPreview />,
      }}
    />
  )
}

export default AtomStepper
