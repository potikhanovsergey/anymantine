import { BlitzPage } from "@blitzjs/next"
import { Container, Grid, Title, Tabs as MantineTabs } from "@mantine/core"
import Tabs from "src/core/components/molecules/Tabs"
import Layout from "src/core/layouts/Layout"

const DesignSystemPage: BlitzPage = () => {
  return (
    <Layout title="Vercel">
      <Container pt="xl" size="xl">
        <Grid>
          <Grid.Col span={8}>
            <Title order={1}>Geist by Vercel</Title>
            <Tabs>
              <MantineTabs.List>
                <MantineTabs.Tab value="settings">Settings</MantineTabs.Tab>
                <MantineTabs.Tab value="messages">Messages</MantineTabs.Tab>
                <MantineTabs.Tab value="gallery">Gallery</MantineTabs.Tab>
              </MantineTabs.List>
            </Tabs>
          </Grid.Col>
          <Grid.Col span={4}>Описание</Grid.Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export default DesignSystemPage
