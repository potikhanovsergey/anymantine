import { SimpleGrid, Paper } from "@mantine/core"
import { paperDataLongMock } from "./paperDocsProps"

const PaperPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Paper withBorder={false} shadow="md" p="sm">
        {paperDataLongMock}
      </Paper>
      <Paper withBorder>{paperDataLongMock}</Paper>
    </SimpleGrid>
  )
}

export default PaperPreview
