export const buttonsSnippet = `import { Button, Group } from '@mantine/core';

function Snippet() {
  return (
    <Group>
      <Button variant="filled">Первая кнопка</Button>
      <Button variant="outline">Вторая кнопка</Button>
    </Group>
  )
}`

export const actionIconsSnippet = `import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

function Snippet() {
  return (
    <Group>
      <ActionIcon variant="filled">
        <IconHeart size={16} />
      </ActionIcon>
      <ActionIcon variant="outline">
        <IconHeart size={16} />
      </ActionIcon>
    </Group>
  )
}`
