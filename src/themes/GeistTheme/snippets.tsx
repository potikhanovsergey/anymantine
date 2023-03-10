export const buttonsSnippet = `import { Button, Group } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

function Snippet() {
  return (
    <Group>
      <Button variant="filled">Первая кнопка</Button>
      <Button variant="outline">Вторая кнопка</Button>
      <Button
        variant="filled"
        leftIcon={<IconHeart size={20} stroke={1} />}
        rightIcon={<IconHeart size={20} stroke={1} />}
      >
        Иконки
      </Button>
    </Group>
  )
}`

export const actionIconsSnippet = `import { ActionIcon, Group, Stack, Box, Tooltip, Title } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

function Snippet() {
  return (
    <Stack>
      <Box>
        <Title order={3} mb="sm">
          Базовый вариант
        </Title>
        <Group>
          <ActionIcon variant="filled">
            <IconHeart size={16} />
          </ActionIcon>
          <ActionIcon variant="outline">
            <IconHeart size={16} />
          </ActionIcon>
        </Group>
      </Box>

      <Box>
        <Title order={3} mb="sm">
          С тултипом
        </Title>
        <Group>
          <Tooltip withArrow label="В избранное">
            <ActionIcon variant="filled">
              <IconHeart size={16} />
            </ActionIcon>
          </Tooltip>

          <Tooltip withArrow label="В избранное">
            <ActionIcon variant="outline">
              <IconHeart size={16} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Box>
    </Stack>
  )
}`

export const inputsSnippet = `import { Stack, Box, Title, TextInput, Tooltip } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"

function Snippet() {
  return (
    <Stack>
      <Box>
        <Title order={3}>Базовый</Title>
        <TextInput size="sm" placeholder="Плейсхолдер..." label="Лэйбл" />
      </Box>
      <Box>
        <Title order={3}>С ошибкой</Title>
        <TextInput
          size="sm"
          label="Лэйбл"
          placeholder="Плейсхолдер..."
          error="Текст ошибки..."
          value="123"
        />
      </Box>
      <Box>
        <Title order={3}>Элемент справа</Title>
        <TextInput
          size="sm"
          label="Лэйбл"
          placeholder="Плейсхолдер..."
          rightSection={
            <Tooltip label="Подсказка">
              <IconInfoCircle size={20} stroke={1} />
            </Tooltip>
          }
        />
      </Box>
      <Box>
        <Title order={3}>Иконка слева</Title>
        <TextInput
          size="sm"
          label="Лэйбл"
          placeholder="Плейсхолдер..."
          icon={<IconHeart size={20} stroke={1} />}
        />
      </Box>
    </Stack>
  )
}`
