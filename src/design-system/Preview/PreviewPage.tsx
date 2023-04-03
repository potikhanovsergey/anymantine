import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  MultiSelect,
  Radio,
  SegmentedControl,
  Select,
  Slider,
  Stack,
  TextInput,
  Switch,
  Textarea,
  Anchor,
  NavLink,
  Accordion,
  Title,
  useMantineTheme,
} from "@mantine/core"
import PageTitle from "../layout/PageTitle"
import ExampleIcon from "../ExampleIcon"
import PageSubtitle from "../layout/PageSubtitle"
import { selectDataMock } from "../Atoms/AtomSelect"
import { ReactNode } from "react"
import AvatarPreview from "../Atoms/AtomAvatar/AvatarPreview"
import ButtonPreview from "../Atoms/AtomButton/ButtonPreview"
import ActionIconPreview from "../Atoms/AtomActionIcon/ActionIconPreview"
import AnchorPreview from "../Atoms/AtomAnchor/AnchorPreview"
import { IconLink } from "@tabler/icons-react"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"
import Link from "next/link"

const LABEL = "Label"
const PLACEHOLDER = "Placeholder"
const DESCRIPTION = "Description"

interface PreviewItemProps {
  title: string
  children: ReactNode
}

const PreviewItems = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div>
      <PageSubtitle>{title}</PageSubtitle>
      <Stack spacing="lg">{children}</Stack>
    </div>
  )
}

const PreviewItem = ({ title, children }: PreviewItemProps) => {
  const router = useRouter()
  const theme = useMantineTheme()
  return (
    <div>
      <Anchor
        component={Link}
        color="dimmed"
        underline={false}
        sx={{ "&:hover": { color: theme.fn.primaryColor() } }}
        href={`/${router.query.slug}/${getHyphenCase(title)}`}
      >
        <Title order={3}>
          <Group spacing="xs" mb="md">
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
      <Stack spacing={40}>
        <PreviewItems title="Actions">
          <PreviewItem title="Button">
            <ButtonPreview />
          </PreviewItem>
          <PreviewItem title="Action Icon">
            <ActionIconPreview />
          </PreviewItem>
        </PreviewItems>
        <PreviewItems title="Inputs">
          <PreviewItem title="Text Input">
            <TextInput label={LABEL} placeholder={PLACEHOLDER} description={DESCRIPTION} />
          </PreviewItem>
          <PreviewItem title="Textarea">
            <Textarea label={LABEL} placeholder={PLACEHOLDER} description={DESCRIPTION} />
          </PreviewItem>
          <PreviewItem title="Select">
            <Stack>
              <Select label={LABEL} description={DESCRIPTION} data={selectDataMock} />
              <MultiSelect label={LABEL} description={DESCRIPTION} data={selectDataMock} />
            </Stack>
          </PreviewItem>
          <PreviewItem title="Segmented Control">
            <SegmentedControl data={selectDataMock} />
          </PreviewItem>
          <PreviewItem title="Slider">
            <Slider label={LABEL} marks={[{ value: 20 }, { value: 50 }, { value: 80 }]} />
          </PreviewItem>
          <PreviewItem title="Switch">
            <Switch label={LABEL} description={DESCRIPTION} />
          </PreviewItem>
          <PreviewItem title="Checkbox">
            <Checkbox label={LABEL} description={DESCRIPTION} />
          </PreviewItem>
          <PreviewItem title="Radio">
            <Radio label={LABEL} description={DESCRIPTION} />
          </PreviewItem>
        </PreviewItems>
        <PreviewItems title="Navigation">
          <PreviewItem title="Anchor">
            <AnchorPreview />
          </PreviewItem>
        </PreviewItems>
        <PreviewItems title="Data display">
          <PreviewItem title="Accordion">
            <Accordion>
              {[
                {
                  value: "customization",
                  label: "Customization",
                  panel: `Colors, fonts, shadows and many other parts are customizable to fit your design
    needs`,
                },
                {
                  value: "flexibility",
                  label: "Flexibility",
                  panel: `Configure components appearance and behavior with vast amount of settings or
      overwrite any part of component styles`,
                },
                {
                  value: "focus-ring",
                  label: "No annoying focus ring",
                  panel: `With new :focus-visible pseudo-class focus ring appears only when user navigates
      with keyboard`,
                },
              ].map((item) => (
                <Accordion.Item value={item.value} key={item.value}>
                  <Accordion.Control>{item.label}</Accordion.Control>
                  <Accordion.Panel>{item.panel}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </PreviewItem>
          <PreviewItem title="Avatar">
            <AvatarPreview />
          </PreviewItem>
        </PreviewItems>
      </Stack>
    </>
  )
}

export default PreviewPage
