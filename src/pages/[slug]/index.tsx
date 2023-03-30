import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mantine/core"
import { GetStaticPropsContext } from "next"

import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import designSystems, { DesignSystemSubPage, themes } from "src/themes"

const DesignSystemPage: BlitzPage = ({
  slug,
  subPage,
}: {
  slug: keyof typeof themes
  subPage: DesignSystemSubPage
}) => {
  return (
    <DesignSystemLayout subPage={subPage} slug={slug}>
      <Container pt={40} size="xl"></Container>
    </DesignSystemLayout>
  )
}

export async function getStaticPaths() {
  const paths = designSystems.map((theme) => ({
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
      subPage: {
        type: "usage",
        label: "Label",
        slug: "/",
      },
    },
  }
}

export default DesignSystemPage
