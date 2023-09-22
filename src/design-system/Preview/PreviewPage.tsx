import { Group, Stack, Anchor, Title, useMantineTheme } from "@mantine/core"
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
  const theme = useMantineTheme()

  return (
    <div>
      <Anchor component={Link} href={`/${router.query.slug}/${getHyphenCase(title)}`}>
        <Title order={3}>
          <Group gap="xs" mb="md">
            {title}
            <IconLink />
          </Group>
        </Title>
      </Anchor>

      {children}
    </div>
  )
}

const PreviewPage = () => {
  return (
    <>
      <PageTitle>Preview</PageTitle>
      <Stack gap={80}>
        {Object.keys(previews).map((category) => (
          <PreviewItems key={category} title={category}>
            {Object.keys(previews[category]).map((atom) => (
              <PreviewItem key={atom} title={atom}>
                {previews[category][atom]}
              </PreviewItem>
            ))}
          </PreviewItems>
        ))}
      </Stack>
    </>
  )
}

export default PreviewPage
