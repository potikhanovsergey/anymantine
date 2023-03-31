import { Stack, Title, TitleOrder, useMantineTheme, Text, Anchor } from "@mantine/core"
import DesignSystemProvider from "src/design-system/DesignSystemProvider"
import Example, { ExampleProps } from "src/design-system/Examples/Example"
import Examples from "src/design-system/Examples/Examples"
import PageTitle from "src/design-system/layout/PageTitle"

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
          <Text inherit color="black" tt="uppercase" span>
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
        .map((fontSize, i) => (
          <Text span color="dimmed" size={fontSize} key={fontSize}>
            <Text inherit color="black" tt="uppercase" span>
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
  return (
    <>
      <PageTitle>Typography</PageTitle>
      <Stack spacing={40}>
        <div>
          <Title order={2} mb="sm">
            Heading sizes
          </Title>
          <DesignSystemProvider>
            <Headings />
          </DesignSystemProvider>
        </div>
        <div>
          <Title order={2} mb="sm">
            Text sizes
          </Title>
          <DesignSystemProvider>
            <Paragraphs />
          </DesignSystemProvider>
        </div>
        <div>
          <Title order={2} mb="sm">
            Text formatting
          </Title>
          <Examples examples={examples} />
        </div>
      </Stack>
    </>
  )
}

export default Typography
