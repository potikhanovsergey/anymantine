import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import LoginProviders from "src/login/LoginProviders"
import { Container } from "@mantine/core"

const LoginPage: BlitzPage = () => {
  return (
    <Layout title="Login">
      <Container pt={120}>
        <LoginProviders />
      </Container>
    </Layout>
  )
}

export default LoginPage
