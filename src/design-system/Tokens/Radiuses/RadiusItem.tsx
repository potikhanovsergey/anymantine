import {
  Anchor,
  Center,
  MantineRadius,
  Stack,
  Text,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { useRouter } from "next/router"
import getHyphenCase from "src/helpers/getHyphenCase"

interface RadiusItemProps {
  radius: MantineRadius
  title: string
  useCases?: string[]
}

interface RadiusBoxProps {
  radius: MantineRadius
}

const RadiusBox = ({ radius }: RadiusBoxProps) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <Center
      style={{
        borderRadius: theme.radius[radius],
        width: rem(80),
        maxWidth: rem(80),
        aspectRatio: "1/1",
        backgroundColor:
          radius === theme.defaultRadius
            ? theme.colors[theme.primaryColor][5]
            : colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[2],
        color: radius === theme.defaultRadius || colorScheme === "dark" ? theme.white : theme.black,
      }}
      mb="md"
    >
      {radius}
    </Center>
  )
}

const RadiusItem = ({ radius, title, useCases }: RadiusItemProps) => {
  const router = useRouter()
  return (
    <div>
      <RadiusBox radius={radius} />
      <Stack gap={4}>
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
      </Stack>
    </div>
  )
}

export default RadiusItem
