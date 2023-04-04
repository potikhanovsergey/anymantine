import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getSliderConfigurator from "src/design-system/Configurator/configurators/slider"
import sliderDocsProps from "./sliderDocsProps"
import SliderPreview from "./SliderPreview"

const AtomSlider = () => {
  const theme = useMantineTheme()
  const sliderConfigurator = getSliderConfigurator(theme)
  return (
    <ComponentDocs
      {...sliderDocsProps}
      preview={{
        configurator: sliderConfigurator,
        children: <SliderPreview />,
      }}
    />
  )
}

export default AtomSlider
