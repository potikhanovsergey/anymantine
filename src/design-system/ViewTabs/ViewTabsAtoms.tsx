import { Tabs as MantineTabs, Button, Title, Text, Box, Group, Stack } from "@mantine/core"
import { modals } from "@mantine/modals"

const ViewTabsAtoms = () => {
  return (
    <MantineTabs.Panel value="atoms" mb="md">
      <Stack>
        <Box>
          <Title order={2} mb="sm">
            Кнопки
          </Title>
          <Group>
            <Button variant="filled">Первая кнопка</Button>
            <Button variant="outline">Вторая кнопка</Button>
          </Group>
        </Box>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsAtoms
