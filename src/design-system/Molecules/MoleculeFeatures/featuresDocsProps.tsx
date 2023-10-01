import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { FeaturesIcons } from "./FeaturesIcons/FeaturesIcons"
import { FullWidthWrapper } from "src/design-system/Wrappers/FullWidthWrapper"
import { FeaturesCards } from "./FeaturesCards/FeaturesCards"
import { FeaturesMonotone } from "./FeaturesMonotone/FeaturesMonotone"
import { FeaturesTitle } from "./FeaturesTitle/FeaturesTitle"

export const featuresComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Features section",
  description: "The features section description",
  examples: [
    {
      descriptive: false,
      children: (
        <FullWidthWrapper>
          <FeaturesIcons />
        </FullWidthWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <FullWidthWrapper>
          <FeaturesCards />
        </FullWidthWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <FullWidthWrapper>
          <FeaturesMonotone />
        </FullWidthWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <FullWidthWrapper>
          <FeaturesTitle />
        </FullWidthWrapper>
      ),
    },
  ],
}
