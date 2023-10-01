import { BlitzPage } from "@blitzjs/next"
import { Container } from "@mantine/core"
import { GetStaticPropsContext } from "next"
import DesignSystemLayout from "src/core/layouts/DesignSystemLayout"
import designSystems, {
  themes,
  DesignSystemSubPage,
  atoms,
  dsSubPages,
  tokens,
  usage,
  molecules,
} from "public/themes"

import dynamic from "next/dynamic"
import { Switch } from "@legendapp/state/react"
import getHyphenCase from "src/helpers/getHyphenCase"

const UsagePage = dynamic(() => import("src/design-system/Usage/UsagePage"))
const RadiusesPage = dynamic(() => import("src/design-system/Tokens/Radiuses/RadiusesPage"))
const ShadowsPage = dynamic(() => import("src/design-system/Tokens/Shadows/ShadowsPage"))
const Typography = dynamic(() => import("src/design-system/Tokens/Typography"))
const ColorsPage = dynamic(() => import("src/design-system/Tokens/Colors/ColorsPage"))
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
const AtomMultiSelect = dynamic(() => import("src/design-system/Atoms/AtomMultiSelect"))
const AtomSegmentedControl = dynamic(() => import("src/design-system/Atoms/AtomSegmentedControl"))
const AtomStepper = dynamic(() => import("src/design-system/Atoms/AtomStepper"))
const AtomTable = dynamic(() => import("src/design-system/Atoms/AtomTable"))

const MoleculeCard = dynamic(() => import("src/design-system/Molecules/MoleculeCard"))
const MoleculeAuthentication = dynamic(
  () => import("src/design-system/Molecules/MoleculeAuthentication")
)
const MoleculeFeatures = dynamic(() => import("src/design-system/Molecules/MoleculeFeatures"))
const MoleculeStats = dynamic(() => import("src/design-system/Molecules/MoleculeStats"))

const DesignSystemSubpage: BlitzPage = ({
  slug,
  page,
  subPage,
}: {
  slug: keyof typeof themes
  page: string
  subPage: DesignSystemSubPage
}) => {
  return (
    <DesignSystemLayout subPage={subPage} slug={slug}>
      <Container
        mih="calc(100vh - var(--app-shell-header-height) - var(--app-shell-footer-height))"
        pt="sm"
        size="xl"
      >
        <Switch value={page}>
          {{
            usage: () => <UsagePage />,
            colors: () => <ColorsPage />,
            typography: () => <Typography />,
            radiuses: () => <RadiusesPage />,
            shadows: () => <ShadowsPage />,
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
            "text-input": () => <AtomTextInputs />,
            tooltip: () => <AtomTooltips />,
            paper: () => <AtomPapers />,
            anchor: () => <AtomAnchor />,
            avatar: () => <AtomAvatar />,
            slider: () => <AtomSlider />,
            chip: () => <AtomChip />,
            "multi-select": () => <AtomMultiSelect />,
            "segmented-control": () => <AtomSegmentedControl />,
            accordion: () => <AtomAccordion />,
            stepper: () => <AtomStepper />,
            table: () => <AtomTable />,
            card: () => <MoleculeCard />,
            authentication: () => <MoleculeAuthentication />,
            features: () => <MoleculeFeatures />,
            stats: () => <MoleculeStats />,
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
      paths.push({ params: { slug: slugs[i], page: getHyphenCase(usage[j]) } })
    }
    // Tokens
    for (let j = 0; j < tokens.length; j++) {
      paths.push({ params: { slug: slugs[i], page: getHyphenCase(tokens[j]) } })
    }
    // Atoms
    for (let j = 0; j < atoms.length; j++) {
      paths.push({ params: { slug: slugs[i], page: getHyphenCase(atoms[j]) } })
    }
    // Molecules
    for (let j = 0; j < molecules.length; j++) {
      paths.push({ params: { slug: slugs[i], page: getHyphenCase(molecules[j]) } })
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
