import { BlitzPage } from "@blitzjs/next"
import {
  Container,
  Grid as MantineGrid,
  Paper,
  SimpleGrid,
  Title,
  Select,
  Text,
  TextInput,
  Stack,
  Box,
  AspectRatio,
} from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import Card from "src/design-systems/Card"
import Grid from "src/design-systems/Grid"
import Image from "next/image"

const DesignSystemsPage: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Container pt="xl" size="xl">
        <MantineGrid gutter="xl">
          <MantineGrid.Col span={3}>
            <Title order={2} mb="xl">
              Фильтры
            </Title>
            <Paper withBorder p="xs">
              <Stack spacing="xs">
                <TextInput />
                <Select data={[]} />
                <Select data={[]} />
                <Select data={[]} />
              </Stack>
            </Paper>
          </MantineGrid.Col>
          <MantineGrid.Col span={9}>
            <Title mb="xl" order={1}>
              Дизайн-системы
            </Title>
            <Grid spacing="xs" cols={3}>
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
