import { BlitzPage } from "@blitzjs/next"
import { Container, SimpleGrid, Title, useMantineTheme } from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import Card from "src/design-systems/Card"
import { themeCards } from "public/themes"

const DesignSystemsPage: BlitzPage = () => {
  const theme = useMantineTheme()
  return (
    <Layout>
      <Container pt="xl" size="xl">
        <Title order={1} mb="xl">
          Themes
        </Title>
        <SimpleGrid
          breakpoints={[
            { maxWidth: "62rem", cols: 3, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
            { minWidth: "62rem", cols: 4, spacing: "md" },
          ]}
        >
          {themeCards.map((card) => (
            <Card key={card.slug} title={card.title} slug={card.slug} imageUrl={card.imageUrl} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default DesignSystemsPage
