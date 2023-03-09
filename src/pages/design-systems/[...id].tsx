import { BlitzPage } from "@blitzjs/next"
import { Container, Grid, Paper, useMantineTheme } from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import DetailsCard from "src/design-system/DetailsCard"
import ViewTabs from "src/design-system/ViewTabs/ViewTabs"

const DesignSystemPage: BlitzPage = () => {
  const theme = useMantineTheme()
  return (
    <Layout title="Vercel">
      <Container pt="xl" size="xl">
        <Grid gutter="xl">
          <Grid.Col span={8}>
            <Paper withBorder p={theme.spacing.xl}>
              <ViewTabs />
            </Paper>
          </Grid.Col>
          <Grid.Col span={4}>
            <Paper p={theme.spacing.xl} withBorder pos="sticky" top={theme.spacing.md}>
              <DetailsCard />
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export default DesignSystemPage
