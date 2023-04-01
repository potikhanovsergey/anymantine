import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mantine/core"
import { GetStaticPropsContext } from "next"
import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import designSystems, {
  DesignSystem,
  themes,
  DesignSystemSubPage,
  atoms,
  dsSubPages,
  tokens,
  usage,
} from "src/themes"

import dynamic from "next/dynamic"
import { Switch } from "@legendapp/state/react"
import UsagePage from "src/design-system/Usage/UsagePage"

const Usage = dynamic(() => import("src/design-system/Usage/UsagePage"))

const RadiusesAndShadows = dynamic(() => import("src/design-system/Tokens/RadiusesAndShadows"))
const Typography = dynamic(() => import("src/design-system/Tokens/Typography"))
const ColorsPage = dynamic(() => import("src/design-system/Tokens/Colors/ColorsPage"))
const States = dynamic(() => import("src/design-system/Tokens/States"))
const Icons = dynamic(() => import("src/design-system/Tokens/Icons"))

const AtomButtons = dynamic(() => import("src/design-system/Atoms/AtomButton"))
const AtomBadges = dynamic(() => import("src/design-system/Atoms/AtomBadge"))
const AtomActionIcons = dynamic(() => import("src/design-system/Atoms/AtomActionIcon"))
const AtomCheckboxes = dynamic(() => import("src/design-system/Atoms/AtomCheckbox"))
const AtomRadios = dynamic(() => import("src/design-system/Atoms/AtomRadio"))
const AtomSelects = dynamic(() => import("src/design-system/Atoms/AtomSelect"))
const AtomSkeletons = dynamic(() => import("src/design-system/Atoms/AtomSkeleton"))
const AtomSwitches = dynamic(() => import("src/design-system/Atoms/AtomSwitch"))
const AtomTextareas = dynamic(() => import("src/design-system/Atoms/AtomTextarea"))
const AtomTextInputs = dynamic(() => import("src/design-system/Atoms/AtomTextInput"))
const AtomTooltips = dynamic(() => import("src/design-system/Atoms/AtomTooltip"))
const AtomPapers = dynamic(() => import("src/design-system/Atoms/AtomPaper"))
const AtomAnchor = dynamic(() => import("src/design-system/Atoms/AtomAnchor"))
const AtomAvatar = dynamic(() => import("src/design-system/Atoms/AtomAvatar"))
const AtomSlider = dynamic(() => import("src/design-system/Atoms/AtomSlider"))
const AtomChip = dynamic(() => import("src/design-system/Atoms/AtomChip"))
const AtomAccordion = dynamic(() => import("src/design-system/Atoms/AtomAccordion"))

const DesignSystemSubpage: BlitzPage = ({
  slug,
  page,
  designSystem,
  subPage,
}: {
  slug: keyof typeof themes
  page: string
  designSystem: DesignSystem
  subPage: DesignSystemSubPage
}) => {
  return (
    <DesignSystemLayout subPage={subPage} slug={slug}>
      <Container pt="sm" size="xl">
        <Switch value={page}>
          {{
            usage: () => <UsagePage />,
            colors: () => <ColorsPage colors={designSystem.colors} />,
            typography: () => <Typography />,
            "radiuses-and-shadows": () => <RadiusesAndShadows />,
            states: () => <States />,
            icons: () => <Icons />,
            button: () => <AtomButtons />,
            badge: () => <AtomBadges />,
            "action-icon": () => <AtomActionIcons />,
            checkbox: () => <AtomCheckboxes />,
            radio: () => <AtomRadios />,
            select: () => <AtomSelects />,
            skeleton: () => <AtomSkeletons />,
            switch: () => <AtomSwitches />,
            textarea: () => <AtomTextareas />,
            input: () => <AtomTextInputs />,
            tooltip: () => <AtomTooltips />,
            paper: () => <AtomPapers />,
            anchor: () => <AtomAnchor />,
            avatar: () => <AtomAvatar />,
            slider: () => <AtomSlider />,
            chip: () => <AtomChip />,
            accordion: () => <AtomAccordion />,
            default: () => <></>,
          }}
        </Switch>
      </Container>
    </DesignSystemLayout>
  )
}

export async function getStaticPaths() {
  const slugs = designSystems.map((theme) => theme.slug)
  const paths: { params: { [key: string]: string } }[] = []

  for (let i = 0; i < slugs.length; i++) {
    // Usage
    for (let j = 0; j < usage.length; j++) {
      paths.push({ params: { slug: slugs[i], page: usage[j].slug } })
    }
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
  const designSystem = designSystems.find((ds) => ds.slug === context.params?.slug)
  const subPage = dsSubPages.find((subPage) => subPage.slug === context.params?.page)
  return {
    props: {
      slug: context.params?.slug,
      page: context.params?.page,
      designSystem,
      subPage,
    },
  }
}

export default DesignSystemSubpage
