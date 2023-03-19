import { BlitzPage } from "@blitzjs/next"
import { Container, Title, Grid, Paper, useMantineTheme } from "@mantine/core"
import { GetStaticPropsContext } from "next"
import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import themes, { DesignSystem, atoms, dsSubPages, tokens } from "src/themes"

import dynamic from "next/dynamic"
import { Switch } from "@legendapp/state/react"
import DetailsCard from "src/design-system/DetailsCard"
import RadiusesAndShadows from "src/design-system/Tokens/RadiusesAndShadows"
import Typography from "src/design-system/Tokens/Typography"

const ThemeColors = dynamic(() => import("src/design-system/Tokens/Colors/ThemeColors"))
const States = dynamic(() => import("src/design-system/Tokens/States"))

const AtomButtons = dynamic(() => import("src/design-system/Atoms/AtomButtons"))
const AtomBadges = dynamic(() => import("src/design-system/Atoms/AtomBadges"))
const AtomActionIcons = dynamic(() => import("src/design-system/Atoms/AtomActionIcons"))
const AtomCheckboxes = dynamic(() => import("src/design-system/Atoms/AtomCheckboxes"))
const AtomRadios = dynamic(() => import("src/design-system/Atoms/AtomRadios"))
const AtomSelects = dynamic(() => import("src/design-system/Atoms/AtomSelects"))
const AtomSkeletons = dynamic(() => import("src/design-system/Atoms/AtomSkeletons"))
const AtomSwitches = dynamic(() => import("src/design-system/Atoms/AtomSwitches"))
const AtomTextareas = dynamic(() => import("src/design-system/Atoms/AtomTextareas"))
const AtomTextInputs = dynamic(() => import("src/design-system/Atoms/AtomTextInputs"))
const AtomTooltips = dynamic(() => import("src/design-system/Atoms/AtomTooltips"))

const DesignSystemSubpage: BlitzPage = ({
  slug,
  page,
  designSystem,
  title,
}: {
  slug: string
  page: string
  designSystem: DesignSystem
  title: string
}) => {
  const theme = useMantineTheme()
  return (
    <DesignSystemLayout slug={slug} title="Vercel">
      <Container pt="sm" size="xl">
        <Title order={1} mb="xl">
          {title}
        </Title>

        {/* <Grid gutter={40}>
          <Grid.Col span={8}> */}
        <Switch value={page}>
          {{
            colors: () => <ThemeColors colors={designSystem.colors} />,
            typography: () => <Typography />,
            "radiuses-and-shadows": () => <RadiusesAndShadows />,
            states: () => <States />,
            button: () => <AtomButtons />,
            badge: () => <AtomBadges />,
            "action-icon": () => <AtomActionIcons />,
            checkbox: () => <AtomCheckboxes />,
            radio: () => <AtomRadios />,
            select: () => <AtomSelects />,
            skeleton: () => <AtomSkeletons />,
            switch: () => <AtomSwitches />,
            textarea: () => <AtomTextareas />,
            "text-input": () => <AtomTextInputs />,
            tooltip: () => <AtomTooltips />,
            default: () => <></>,
          }}
        </Switch>
        {/* </Grid.Col>
          <Grid.Col span={4}>
            <Paper withBorder pos="sticky" top={theme.spacing.md}>
              <DetailsCard />
            </Paper>
          </Grid.Col>
        </Grid> */}
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
  const designSystem = themes.find((ds) => ds.slug === context.params?.slug)
  const title = dsSubPages.find((subPage) => subPage.slug === context.params?.page)?.label
  return {
    props: {
      slug: context.params?.slug,
      page: context.params?.page,
      designSystem,
      title,
    },
  }
}

export default DesignSystemSubpage
