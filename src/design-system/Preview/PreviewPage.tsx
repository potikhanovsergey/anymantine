import {
  Group,
  Stack,
  Anchor,
  Title,
  useMantineTheme,
  Grid,
  Paper,
  Text,
  NavLink,
  ScrollArea,
} from "@mantine/core"
import PageTitle from "../layout/PageTitle"
import PageSubtitle from "../layout/PageSubtitle"
import { ReactNode } from "react"
import AvatarPreview from "../Atoms/AtomAvatar/AvatarPreview"
import ButtonPreview from "../Atoms/AtomButton/ButtonPreview"
import ActionIconPreview from "../Atoms/AtomActionIcon/ActionIconPreview"
import AnchorPreview from "../Atoms/AtomAnchor/AnchorPreview"
import { IconLink } from "@tabler/icons-react"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"
import Link from "next/link"
import TextInputPreview from "../Atoms/AtomTextInput/TextInputPreview"
import TextareaPreview from "../Atoms/AtomTextarea/TextareaPreview"
import SelectPreview from "../Atoms/AtomSelect/SelectPreview"
import SegmentedControlPreview from "../Atoms/AtomSegmentedControl/SegmentedControlPreview"
import SliderPreview from "../Atoms/AtomSlider/SliderPreview"
import SwitchPreview from "../Atoms/AtomSwitch/SwitchPreview"
import CheckboxPreview from "../Atoms/AtomCheckbox/CheckboxPreview"
import RadioPreview from "../Atoms/AtomRadio/RadioPreview"
import AccordionPreview from "../Atoms/AtomAccordion/AccordionPreview"
import BadgePreview from "../Atoms/AtomBadge/BadgePreview"
import ChipPreview from "../Atoms/AtomChip/ChipPreview"
import MultiSelectPreview from "../Atoms/AtomMultiSelect/MultiSelectPreview"
import PaperPreview from "../Atoms/AtomPaper/PaperPreview"
import SkeletonPreview from "../Atoms/AtomSkeleton/SkeletonPreview"
import StepperPreview from "../Atoms/AtomStepper/StepperPreview"
import TooltipPreview from "../Atoms/AtomTooltip/TooltipPreview"
import TablePreview from "../Atoms/AtomTable/TablePreview"

const previews = {
  Actions: {
    Button: <ButtonPreview />,
    "Action Icon": <ActionIconPreview />,
  },
  Inputs: {
    "Text Input": <TextInputPreview />,
    Textarea: <TextareaPreview />,
    Select: <SelectPreview />,
    "Segmented Control": <SegmentedControlPreview />,
    Slider: <SliderPreview />,
    Switch: <SwitchPreview />,
    Checkbox: <CheckboxPreview />,
    Radio: <RadioPreview />,
    Chip: <ChipPreview />,
    "Multi Select": <MultiSelectPreview />,
  },
  Navigation: {
    Anchor: <AnchorPreview />,
    Stepper: <StepperPreview />,
  },
  "Data display": {
    Accordion: <AccordionPreview />,
    Avatar: <AvatarPreview />,
    Badge: <BadgePreview />,
    Table: <TablePreview />,
  },
  Overlays: {
    Tooltip: <TooltipPreview />,
  },
  Feedback: {
    Skeleton: <SkeletonPreview />,
  },
  Miscellaneous: {
    Paper: <PaperPreview />,
  },
}

interface PreviewItemProps {
  title: string
  children: ReactNode
}

const PreviewItems = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div>
      <PageSubtitle mb="xl">{title}</PageSubtitle>
      <Stack gap={48}>{children}</Stack>
    </div>
  )
}

const PreviewItem = ({ title, children }: PreviewItemProps) => {
  const router = useRouter()
  const hyphenCaseTitle = getHyphenCase(title)

  return (
    <div id={hyphenCaseTitle}>
      <Anchor component={Link} href={`/${router.query.slug}/${hyphenCaseTitle}`}>
        <Title order={3}>
          <Group align="center" gap={4} mb="md">
            {title}
            <IconLink size={"1.25rem"} />
          </Group>
        </Title>
      </Anchor>

      {children}
    </div>
  )
}

const previewsKeys = Object.keys(previews)

const PreviewPage = () => {
  return (
    <>
      <PageTitle>Preview</PageTitle>
      <Group gap={64} wrap="nowrap" align="flex-start">
        <Stack gap={80}>
          {previewsKeys.map((category) => (
            <PreviewItems key={category} title={category}>
              {Object.keys(previews[category]).map((atom) => (
                <PreviewItem key={atom} title={atom}>
                  {previews[category][atom]}
                </PreviewItem>
              ))}
            </PreviewItems>
          ))}
        </Stack>
        <Paper
          p="sm"
          w="100%"
          maw={320}
          pos="sticky"
          top="calc(var(--app-shell-header-height) + 2rem)"
        >
          <Text fw="bold" size="sm" mb={4}>
            Components
          </Text>
          <ScrollArea.Autosize mah={400} offsetScrollbars>
            {previewsKeys.map((category) =>
              Object.keys(previews[category]).map((atom) => (
                <NavLink key={atom} label={atom} href={`#${getHyphenCase(atom)}`} />
              ))
            )}
          </ScrollArea.Autosize>
        </Paper>
      </Group>
    </>
  )
}

export default PreviewPage
