import { BlitzPage } from "@blitzjs/next"
import { Container, Title } from "@mantine/core"
import { GetStaticPropsContext } from "next"
import { useEffect } from "react"
import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import themes, { DesignSystem, atoms, tokens } from "src/themes"

import dynamic from "next/dynamic"

const ThemeColors = dynamic(() => import("src/design-system/ThemeColors/ThemeColors"))

const DesignSystemSubpage: BlitzPage = ({
  slug,
  page,
  designSystem,
}: {
  slug: string
  page: string
  designSystem: DesignSystem
}) => {
  return (
    <DesignSystemLayout slug={slug} title="Vercel">
      <Container pt="sm" size="xl">
        <Title order={1} mb="xl">
          {designSystem.title}
        </Title>
        {page === "colors" && <ThemeColors colors={designSystem.colors} />}
      </Container>
    </DesignSystemLayout>
  )
}

export async function getStaticPaths() {
  const slugs = themes.map((theme) => theme.slug)
  const paths: { params: { [key: string]: string } }[] = []

  for (let i = 0; i < slugs.length; i++) {
    // Tokens
    for (let j = 0; j < tokens.length; j++) {
      paths.push({ params: { slug: slugs[i], page: tokens[j].slug } })
    }
    // Atoms
    for (let j = 0; j < atoms.length; j++) {
      paths.push({ params: { slug: slugs[i], page: atoms[j].slug } })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const designSystem = themes.find((subPage) => subPage.slug === context.params?.slug)
  return {
    props: {
      slug: context.params?.slug,
      page: context.params?.page,
      designSystem,
    },
  }
}

export default DesignSystemSubpage
