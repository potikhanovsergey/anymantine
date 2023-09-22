import { BlitzPage } from "@blitzjs/next"
import { Container, SimpleGrid, Title, useMantineTheme } from "@mantine/core"
import Layout from "src/core/layouts/Layout"
import Card from "src/design-systems/Card"
import { themeCards } from "public/themes"

const DesignSystemsPage: BlitzPage = () => {
  return (
    <Layout>
      <Container pt="xl" size="xl">
        <Title order={1} mb="xl">
          Themes
        </Title>
        <SimpleGrid spacing="xs" cols={{ base: 1, sm: 2, lg: 4 }}>
          {themeCards.map((card) => (
            <Card key={card.slug} title={card.title} slug={card.slug} imageUrl={card.imageUrl} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default DesignSystemsPage
