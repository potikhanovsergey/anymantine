import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { ProgressCard } from "./ProgressCard/ProgressCard"
import { FullWidthWrapper } from "src/design-system/Wrappers/FullWidthWrapper"
import { CardWrapper } from "src/design-system/Wrappers/CardWrapper"
import { ProgressCardColor } from "./ProgressCardColor/ProgressCardColor"

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
          <ProgressCardColor />
        </CardWrapper>
      ),
    },
  ],
}
