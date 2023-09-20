import { useSelector } from "@legendapp/state/react"
import { Stack, Title, TitleOrder, useMantineTheme, Text, Anchor } from "@mantine/core"
import Link from "src/core/components/atoms/Link"
import { ExampleProps } from "src/design-system/Examples/Example"
import Examples from "src/design-system/Examples/Examples"
import PageSubtitle from "src/design-system/layout/PageSubtitle"
import PageTitle from "src/design-system/layout/PageTitle"
import { DesignSystem } from "src/state/design-system"

const Headings = () => {
  const theme = useMantineTheme()
  return (
    <Stack>
      {Object.keys(theme.headings.sizes).map((heading, i) => (
        <Title
          // @ts-ignore
          component="span"
          color="dimmed"
          key={heading}
          order={(i + 1) as TitleOrder}
        >
          <Text
            inherit
            color={theme.colorScheme === "dark" ? theme.white : theme.black}
            tt="uppercase"
            span
          >
            {heading}
          </Text>{" "}
          Lorem ipsum dolor sit amet.
        </Title>
      ))}
    </Stack>
  )
}

const Paragraphs = () => {
  const theme = useMantineTheme()
  return (
    <Stack>
      {Object.keys(theme.fontSizes)
        .reverse()
        .map((fontSize) => (
          <Text span color="dimmed" size={fontSize} key={fontSize}>
            <Text
              inherit
              color={theme.colorScheme === "dark" ? theme.white : theme.black}
              tt="uppercase"
              span
            >
              {fontSize}
            </Text>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Text>
        ))}
    </Stack>
  )
}

const Typography = () => {
  const examples: ExampleProps[] = [
    {
      title: "Bold",
      description: `Bold text can be used for placing importance on part of a sentence, rendering the
      text as a heavier font weight. This is for semantic formatting, when it’s intended
      to add a tone that conveys importance.`,
      children: (
        <Text>
          Lorem ipsum dolor sit amet <b>consectetur adipisicing</b> elit. Delectus, incidunt?
        </Text>
      ),
    },
    {
      title: "Italic",
      description:
        "Most commonly, italics are used for emphasis or contrast — that is, to draw attention to some particular part of a text.",
      children: (
        <Text>
          Lorem ipsum dolor sit amet <i>consectetur adipisicing</i> elit. Delectus, incidunt?
        </Text>
      ),
    },
    {
      title: "Underline",
      description:
        "Underline is used for text links (either hover state or default state, depending on the style of the link) and is never used as a mechanism for adding emphasis.",
      children: (
        <Text>
          Lorem ipsum dolor sit amet <Anchor underline>consectetur adipisicing </Anchor>
          elit. Delectus, incidunt?
        </Text>
      ),
    },
  ]

  const font = useSelector(DesignSystem.font)
  return (
    <>
      <PageTitle>Typography</PageTitle>
      <Stack gap={40}>
        {font && (
          <div>
            <PageSubtitle>Font family</PageSubtitle>
            <Text>
              This theme uses <strong>{font.label}</strong> font-family. It&apos;s free and can be
              downloaded from{" "}
              <Anchor target="_blank" href={font.source}>
                Google Fonts.
              </Anchor>
            </Text>
          </div>
        )}
        <div>
          <PageSubtitle>Heading sizes</PageSubtitle>
          <Headings />
        </div>
        <div>
          <PageSubtitle>Text sizes</PageSubtitle>
          <Paragraphs />
        </div>
        <div>
          <PageSubtitle>Text formatting</PageSubtitle>
          <Examples examples={examples} />
        </div>
      </Stack>
    </>
  )
}

export default Typography
