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
  TitleOrder,
  useMantineTheme,
} from "@mantine/core"
import ThemeColors from "../ThemeColors/ThemeColors"
import PanelStack from "../PanelStack"
import { Prism } from "@mantine/prism"
import CornerItem from "../Corners/CornerItem"
import ShadowItem from "../Shadows/ShadowItem"

const ViewTabsTokens = () => {
  const theme = useMantineTheme()
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
          <Stack>
            <Box>
              <Title order={3} mb={4}>
                Шрифты
              </Title>
              <Text mb="xs">
                В продуктах Vercel используется шрифт{" "}
                <Anchor href="https://fonts.google.com/specimen/Inter" target="_blank">
                  Inter
                </Anchor>{" "}
                для всех текстов, включая заголовки и кнопки.
              </Text>
              <Text>
                Для отображения кода используется{" "}
                <Anchor
                  href="https://fonts.google.com/specimen/Roboto+Mono?query=Roboto+mono"
                  target="_blank"
                >
                  Roboto Mono
                </Anchor>
                .
              </Text>
            </Box>
            <Box>
              <Title order={3} mb={4}>
                Размеры заголовков
              </Title>
              <Stack>
                {Object.keys(theme.headings.sizes).map((heading, i) => (
                  <Title key={heading} order={(i + 1) as TitleOrder} color="dimmed">
                    Lorem ipsum dolor sit amet.
                  </Title>
                ))}
              </Stack>
            </Box>
            <Box>
              <Title order={3} mb={4}>
                Размеры текста
              </Title>
              <Stack sx={{ flexDirection: "column-reverse" }}>
                {Object.keys(theme.fontSizes).map((size, i) => (
                  <Text key={size} size={size} color="dimmed">
                    Далеко-далеко за словесными горами в стране.
                  </Text>
                ))}
              </Stack>
            </Box>
          </Stack>
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
