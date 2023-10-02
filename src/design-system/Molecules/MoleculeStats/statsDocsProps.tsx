import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { ProgressCard } from "./ProgressCard/ProgressCard"
import { CardWrapper } from "src/design-system/Wrappers/CardWrapper"
import { IconProgressCard } from "./IconProgressCard/IconProgressCard"
import { StatsGridIcons } from "./StatsGridIcons/StatsGridIcons"
import { FullWidthWrapper } from "src/design-system/Wrappers/FullWidthWrapper"

export const statsComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Stats section",
  description: "The stats section description",
  examples: [
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <ProgressCard />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <IconProgressCard />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <FullWidthWrapper>
          <StatsGridIcons />
        </FullWidthWrapper>
      ),
    },
  ],
}
