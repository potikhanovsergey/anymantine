import { BlitzPage } from "@blitzjs/next"
import { Container, Grid, Paper, useMantineTheme } from "@mantine/core"
import { useEffect } from "react"
import Layout from "src/core/layouts/Layout"
import DetailsCard from "src/design-system/DetailsCard"
import ViewTabs from "src/design-system/ViewTabs/ViewTabs"
import { DesignTheme } from "src/state/design-system"
import GeistTheme from "src/themes/GeistTheme"

const DesignSystemPage: BlitzPage = () => {
  const theme = useMantineTheme()
  useEffect(() => {
    DesignTheme.set(GeistTheme)
  }, [])
  return (
    <Layout title="Vercel">
      <Container pt={40} size="xl">
        <Grid gutter="xl">
          <Grid.Col span={8}>
            <Paper pl={theme.spacing.xl} pr={theme.spacing.xl} pb={theme.spacing.xl}>
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
