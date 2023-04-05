import { BlitzPage } from "@blitzjs/next"
import { Container, Title, useMantineTheme } from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import Card from "src/design-systems/Card"
import Grid from "src/design-systems/Grid"
import { themeCards } from "public/themes"

const DesignSystemsPage: BlitzPage = () => {
  const theme = useMantineTheme()
  return (
    <Layout>
      <Container pt="xl" size="xl">
        <Title order={1} mb="xl">
          Themes
        </Title>
        <Grid spacing="xs" cols={4}>
          {themeCards.map((card) => (
            <Card key={card.slug} title={card.title} slug={card.slug} imageUrl={card.imageUrl} />
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default DesignSystemsPage
