import { SimpleGrid, Paper } from "@mantine/core"
import { paperDataLongMock } from "."

const PaperPreview = () => {
  return (
    <SimpleGrid cols={2}>
      <Paper withBorder={false} shadow="md">
        {paperDataLongMock}
      </Paper>
      <Paper withBorder>{paperDataLongMock}</Paper>
    </SimpleGrid>
  )
}

export default PaperPreview
