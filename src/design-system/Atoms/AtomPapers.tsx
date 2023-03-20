import { SimpleGrid, Paper } from "@mantine/core"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"
import getPaperConfigurator from "../Configurator/configurators/paper"

export const paperDataMock =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid dolore dolorum a minus? Accusamus aperiam fugiat totam optio enim?"

const AtomPapers = () => {
  const paperConfigurator = getPaperConfigurator(DesignTheme.peek())

  return (
    <ItemPreview
      configurator={paperConfigurator}
      title="Карточка"
      mantineLink="https://mantine.dev/core/paper"
    >
      <SimpleGrid cols={2}>
        <Paper withBorder={false} shadow="md">
          {paperDataMock}
        </Paper>
        <Paper withBorder>{paperDataMock}</Paper>
      </SimpleGrid>
    </ItemPreview>
  )
}

export default AtomPapers
