import {
  Tabs as MantineTabs,
  Button,
  Title,
  Box,
  Group,
  Stack,
  ActionIcon,
  TextInput,
  Tooltip,
} from "@mantine/core"
import ItemWithSnippet from "../ItemWithSnippet"
import { IconHeart, IconInfoCircle } from "@tabler/icons-react"
import { actionIconsSnippet, buttonsSnippet, inputsSnippet } from "src/themes/GeistTheme/snippets"

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
              <Button
                variant="filled"
                leftIcon={<IconHeart size={20} stroke={1} />}
                rightIcon={<IconHeart size={20} stroke={1} />}
              >
                Иконки
              </Button>
            </Group>
          </ItemWithSnippet>
        </Box>
        <Box>
          <Title order={2} mb="sm">
            ActionIcon
          </Title>
          <ItemWithSnippet snippet={actionIconsSnippet}>
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
          </ItemWithSnippet>
        </Box>
        <Box>
          <Title order={2} mb="sm">
            Инпут
          </Title>
          <ItemWithSnippet snippet={inputsSnippet}>
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
          </ItemWithSnippet>
        </Box>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsAtoms
