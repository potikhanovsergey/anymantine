import { BlitzPage } from "@blitzjs/next"
import { Container, Title } from "@mantine/core"
import { GetStaticPropsContext } from "next"

import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import themes from "src/themes"

const DesignSystemPage: BlitzPage = ({ slug }: { slug: string }) => {
  return (
    <DesignSystemLayout slug={slug} title="Vercel">
      <Container pt={40} size="xl"></Container>
    </DesignSystemLayout>
  )
}

export async function getStaticPaths() {
  const paths = themes.map((theme) => ({
    params: {
      slug: theme.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      slug: context.params?.slug,
    },
  }
}

export default DesignSystemPage
