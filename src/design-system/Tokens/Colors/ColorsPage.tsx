import { Stack } from "@mantine/core"
import PageTitle from "src/design-system/layout/PageTitle"
import PrimaryColor from "./PrimaryColor"
import ThemeColors from "./ThemeColors"
import PageSubtitle from "src/design-system/layout/PageSubtitle"

export interface ColorsPageProps {
  colors: string[]
}

const ColorsPage = ({ colors }: ColorsPageProps) => {
  return (
    <>
      <PageTitle>Colors</PageTitle>
      <Stack spacing={64}>
        <div>
          <PageSubtitle>Pallete</PageSubtitle>
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
