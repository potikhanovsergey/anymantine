import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mantine/core"
import Layout from "src/core/layouts/Layout"

const DesignSystemPage: BlitzPage = () => {
  return (
    <Layout title="Vercel">
      <Container pt="xl" size="xl">
        Vercel
      </Container>
    </Layout>
  )
}

export default DesignSystemPage
