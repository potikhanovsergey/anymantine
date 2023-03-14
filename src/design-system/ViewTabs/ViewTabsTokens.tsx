import {
  Anchor,
  Box,
  Group,
  MantineProvider,
  Paper,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core"
import ThemeColors from "../ThemeColors/ThemeColors"
import PanelStack from "../PanelStack"
import { Prism } from "@mantine/prism"
import CornerItem from "../Corners/CornerItem"
import ShadowItem from "../Shadows/ShadowItem"

const ViewTabsTokens = () => {
  return (
    <Tabs.Panel value="tokens" mt="md">
      <PanelStack>
        <Stack spacing="xs">
          <Title order={2}>Цвета</Title>
          <ThemeColors />
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Радиусы границ</Title>
          <SimpleGrid cols={5}>
            <CornerItem
              radius="xs"
              title="xs"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <CornerItem
              radius="sm"
              title="sm"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <CornerItem
              radius="md"
              title="md"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <CornerItem
              radius="lg"
              title="lg"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <CornerItem
              radius="xl"
              title="xl"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <CornerItem
              radius={1000}
              title="rounded"
              useCases={["Иконки", "Кнопки-иконки", "Аватары"]}
            />
          </SimpleGrid>
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Тени</Title>
          <SimpleGrid cols={5}>
            <ShadowItem
              shadow="xs"
              title="xs"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <ShadowItem
              shadow="sm"
              title="sm"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <ShadowItem
              shadow="md"
              title="md"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <ShadowItem
              shadow="lg"
              title="lg"
              useCases={["Формы", "Кнопки", "Чекбоксы", "Тултипы"]}
            />
            <ShadowItem shadow="xl" title="xl" useCases={["Иконки", "Кнопки-иконки", "Аватары"]} />
          </SimpleGrid>
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Типографика</Title>
          <Paper withBorder>Йоо</Paper>
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Структура и сетка</Title>
          <Paper withBorder>Йоо</Paper>
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Иконки</Title>
          <Box>
            <Text>
              В продуктах Vercel используется свой набор иконок, основанный на Feather Icons.
            </Text>
            <Text weight="bold" mt="xl">
              Установка библиотеки на React
            </Text>
            <Prism language="actionscript">{`npm i react-feather`}</Prism>
            <Text weight="bold" mt="xl">
              Использование иконки
            </Text>
            <Prism language="tsx">
              {`import React from 'react';
import { Camera } from 'react-feather';

const App = () => {
  return <Camera color="red" size={48} />
};

export default App;`}
            </Prism>
            <Text mt="sm">
              Подробнее:{" "}
              <Anchor href="https://vercel.com/design/icons" target="_blank">
                https://vercel.com/design/icons
              </Anchor>
            </Text>
          </Box>
        </Stack>
      </PanelStack>
    </Tabs.Panel>
  )
}

export default ViewTabsTokens
