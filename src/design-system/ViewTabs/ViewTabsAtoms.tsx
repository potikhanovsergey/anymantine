import { Tabs as MantineTabs, Button, Title, Text, Box, Group, Stack, Paper } from "@mantine/core"
import { modals } from "@mantine/modals"
import ItemWithSnippet from "../ItemWithSnippet"

const ViewTabsAtoms = () => {
  return (
    <MantineTabs.Panel value="atoms" mb="md">
      <Stack>
        <Box>
          <Title order={2} mb="sm">
            Кнопки
          </Title>
          <ItemWithSnippet>
            <Group>
              <Button variant="filled">Первая кнопка</Button>
              <Button variant="outline">Вторая кнопка</Button>
            </Group>
          </ItemWithSnippet>
        </Box>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsAtoms
