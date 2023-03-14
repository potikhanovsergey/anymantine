import { Anchor, Box, Paper, Stack, Tabs, Text, Title } from "@mantine/core"
import ThemeColors from "../ThemeColors/ThemeColors"
import PanelStack from "../PanelStack"
import { Prism } from "@mantine/prism"

const ViewTabsTokens = () => {
  return (
    <Tabs.Panel value="tokens" mt="md">
      <PanelStack>
        <Stack spacing="xs">
          <Title order={2}>Цвета</Title>
          <ThemeColors />
        </Stack>
        <Stack spacing="xs">
          <Title order={2}>Границы и тени</Title>
          <Paper withBorder>Йоо</Paper>
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
