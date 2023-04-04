import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getPaperConfigurator from "src/design-system/Configurator/configurators/paper"
import paperDocsProps from "./paperDocsProps"
import PaperPreview from "./PaperPreview"

export const paperDataLongMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid dolore dolorum a minus? Accusamus aperiam fugiat totam optio enim?"

export const paperDataShortMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat."

const AtomPapers = () => {
  const theme = useMantineTheme()
  const paperConfigurator = getPaperConfigurator(theme)

  return (
    <ComponentDocs
      {...paperDocsProps}
      preview={{
        configurator: paperConfigurator,
        children: <PaperPreview />,
      }}
    />
  )
}

export default AtomPapers
