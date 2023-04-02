import { Center, MantineNumberSize, Stack, Text } from "@mantine/core"
import createStyles from "./RadiusItem.styles"
import Link from "src/core/components/atoms/Link"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"

interface RadiusItemProps {
  radius: MantineNumberSize
  title: string
  useCases?: string[]
}

interface RadiusBoxProps {
  radius: MantineNumberSize
}

const RadiusBox = ({ radius }: RadiusBoxProps) => {
  const { classes } = createStyles({ radius })
  return (
    <Center className={classes.box} mb="md">
      <Text size="md">{radius}</Text>
    </Center>
  )
}

const RadiusItem = ({ radius, title, useCases }: RadiusItemProps) => {
  const router = useRouter()
  return (
    <div>
      <RadiusBox radius={radius} />
      <Text mb="xs" weight={500}>
        {title}
      </Text>
      <Stack spacing={4}>
        {useCases?.map((useCase) => (
          <Link
            tt="capitalize"
            w="fit-content"
            target="_blank"
            href={`/${router.query.slug}/${getHyphenCase(useCase)}`}
            key={useCase}
          >
            {useCase}
          </Link>
        ))}
      </Stack>
    </div>
  )
}

export default RadiusItem
