import { Tabs as MantineTabs, Button, Title, Box, Group, Stack, ActionIcon } from "@mantine/core"
import ItemWithSnippet from "../ItemWithSnippet"
import { IconHeart } from "@tabler/icons-react"
import { actionIconsSnippet, buttonsSnippet } from "src/themes/GeistTheme/snippets"

const ViewTabsAtoms = () => {
  return (
    <MantineTabs.Panel value="atoms" mb="md">
      <Stack>
        <Box>
          <Title order={2} mb="sm">
            Кнопки
          </Title>
          <ItemWithSnippet snippet={buttonsSnippet}>
            <Group>
              <Button variant="filled">Первая кнопка</Button>
              <Button variant="outline">Вторая кнопка</Button>
            </Group>
          </ItemWithSnippet>
        </Box>
        <Box>
          <Title order={2} mb="sm">
            ActionIcon
          </Title>
          <ItemWithSnippet snippet={actionIconsSnippet}>
            <Group>
              <ActionIcon variant="filled">
                <IconHeart size={16} />
              </ActionIcon>
              <ActionIcon variant="outline">
                <IconHeart size={16} />
              </ActionIcon>
            </Group>
          </ItemWithSnippet>
        </Box>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsAtoms
