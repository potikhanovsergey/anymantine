import { Stack, Text } from "@mantine/core"
import PageTitle from "src/design-system/layout/PageTitle"
import PrimaryColor from "./PrimaryColor"
import ThemeColors from "./ThemeColors"
import PageSubtitle from "src/design-system/layout/PageSubtitle"
import Link from "src/core/components/atoms/Link"

export interface ColorsPageProps {
  colors: string[]
}

const ColorsPage = ({ colors }: ColorsPageProps) => {
  return (
    <>
      <PageTitle>Colors</PageTitle>

      <Stack spacing={64}>
        <div>
          <PageSubtitle mb="sm">Pallete</PageSubtitle>
          <Text mb="md" maw={700}>
            Usually, Animantine themes rewrite several colors from the standard Mantine palette. A
            list of all the colors available can be found at{" "}
            <Link href="https://mantine.dev/theming/colors/" target="_blank">
              Mantine Colors
            </Link>
            . You can also always add new colors or rewrite existing ones.
          </Text>
          <ThemeColors colors={colors} />
        </div>
        <div>
          <PageSubtitle>Primary color</PageSubtitle>
          <PrimaryColor />
        </div>
      </Stack>
    </>
  )
}

export default ColorsPage
