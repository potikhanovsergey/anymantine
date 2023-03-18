import { BlitzPage } from "@blitzjs/next"
import { Box, Container, Grid, Paper, useMantineTheme } from "@mantine/core"
import { GetStaticPropsContext } from "next"
import { useEffect } from "react"
import Layout from "src/core/layouts/Layout"
import DetailsCard from "src/design-system/DetailsCard"
import ViewTabs from "src/design-system/ViewTabs/ViewTabs"
import { DesignTheme } from "src/state/design-system"
import themes from "src/themes"

const DesignSystemPage: BlitzPage = ({ slug }: { slug: string }) => {
  const theme = useMantineTheme()
  useEffect(() => {
    const pageTheme = themes.find((theme) => theme.slug === slug)?.theme
    console.log(slug, pageTheme, themes)
    pageTheme && DesignTheme.set(pageTheme)
  }, [slug])
  return (
    <Layout title="Vercel">
      <Container pt={40} size="xl">
        <Grid gutter="xl">
          <Grid.Col span={8}>
            <ViewTabs />
          </Grid.Col>
          <Grid.Col span={4}>
            <Box pos="sticky" top={0} pt="md">
              <Paper p={theme.spacing.xl}>
                <DetailsCard />
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = themes.map((theme) => ({ params: { id: theme.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      slug: context.params?.id,
    },
  }
}

export default DesignSystemPage
