import { Stack, Title } from "@mantine/core"
import DesignSystemProvider from "src/design-system/DesignSystemProvider"
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
          <DesignSystemProvider>
            <PrimaryColor />
          </DesignSystemProvider>
        </div>
      </Stack>
    </>
  )
}

export default ColorsPage
