import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getSegmentedControlConfigurator from "src/design-system/Configurator/configurators/segmented-control"
import segmentedControlDocsProps from "./segmentedControlDocsProps"
import SegmentedControlPreview from "./SegmentedControlPreview"

export const segmentedControlDataMock = [
  { label: "React", value: "react" },
  { label: "Angular", value: "ng" },
  { label: "Vue", value: "vue" },
]

const AtomSegmentedControl = () => {
  const theme = useMantineTheme()
  const segmentedControlConfigurator = getSegmentedControlConfigurator(theme)
  return (
    <ComponentDocs
      {...segmentedControlDocsProps}
      preview={{
        configurator: segmentedControlConfigurator,
        children: <SegmentedControlPreview />,
      }}
    />
  )
}

export default AtomSegmentedControl
