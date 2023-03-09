import { BlitzPage } from "@blitzjs/next"
import {
  Container,
  Grid as MantineGrid,
  Paper,
  Title,
  Select,
  TextInput,
  Stack,
  Checkbox,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import Card from "src/design-systems/Card"
import Grid from "src/design-systems/Grid"

const DesignSystemsPage: BlitzPage = () => {
  const theme = useMantineTheme()
  return (
    <Layout title="Home">
      <Container pt="xl" size="xl">
        <Title order={1} mb="xl">
          Дизайн системы
        </Title>
        <MantineGrid gutter="xl">
          <MantineGrid.Col span={3}>
            <Paper withBorder p="xs" pos="sticky" top={theme.spacing.md}>
              <Title size={24} mb="xs" order={2}>
                Фильтры
              </Title>
              <Stack spacing="sm">
                <TextInput label="Поиск по названию" placeholder="Введите название" />
                <Checkbox label="С наличием Figma" />
              </Stack>
              <Title size={24} mt="md" mb="xs" order={2}>
                Сортировка
              </Title>
              <Stack spacing="sm">
                <Select
                  label="Цена"
                  defaultValue="inc"
                  data={[
                    { label: "По убыванию", value: "dec" },
                    { label: "По возрастанию", value: "inc" },
                  ]}
                />
                <Select
                  defaultValue="dec"
                  label="Дата обновления"
                  data={[
                    { label: "По убыванию", value: "dec" },
                    { label: "По возрастанию", value: "inc" },
                  ]}
                />
              </Stack>
              <Group grow noWrap mt="xl">
                <Button variant="outline">Сбросить</Button>
                <Button>Применить</Button>
              </Group>
            </Paper>
          </MantineGrid.Col>
          <MantineGrid.Col span={9}>
            <Grid spacing="xs" cols={3}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Grid>
          </MantineGrid.Col>
        </MantineGrid>
      </Container>
    </Layout>
  )
}

export default DesignSystemsPage
