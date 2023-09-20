import { Anchor, Center, Stack, Text, useMantineTheme } from "@mantine/core"
// import createStyles from "./RadiusItem.styles"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"

interface RadiusItemProps {
  // radius: MantineNumberSize
  radius: any
  title: string
  useCases?: string[]
}

interface RadiusBoxProps {
  // radius: MantineNumberSize
  radius: any
}

const RadiusBox = ({ radius }: RadiusBoxProps) => {
  // const { classes } = createStyles({ radius })
  const theme = useMantineTheme()
  return (
    // <Center className={classes.box} mb="md">
    <Text size="sm">{theme.radius[radius]}</Text>
    // </Center>
  )
}

const RadiusItem = ({ radius, title, useCases }: RadiusItemProps) => {
  const router = useRouter()
  return (
    <div>
      <RadiusBox radius={radius} />
      {/* <Text mb="xs" weight={500}>
        {title}
      </Text> */}
      {/* <Stack gap={4}> */}
      {useCases?.map((useCase) => (
        <Anchor
          tt="capitalize"
          w="fit-content"
          target="_blank"
          href={`/${router.query.slug}/${getHyphenCase(useCase)}`}
          key={useCase}
        >
          {useCase}
        </Anchor>
      ))}
      {/* </Stack> */}
    </div>
  )
}

export default RadiusItem
