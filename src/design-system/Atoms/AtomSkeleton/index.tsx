import { useMantineTheme } from "@mantine/core"
import ComponentDocs from "src/design-system/ComponentDocs"
import getSkeletonConfigurator from "src/design-system/Configurator/configurators/skeleton"
import skeletonDocsProps from "./skeletonDocsProps"
import SkeletonPreview from "./SkeletonPreview"

const AtomSkeleton = () => {
  const theme = useMantineTheme()
  const skeletonConfigurator = getSkeletonConfigurator(theme)
  return (
    <ComponentDocs
      {...skeletonDocsProps}
      preview={{
        configurator: skeletonConfigurator,
        children: <SkeletonPreview />,
      }}
    />
  )
}

export default AtomSkeleton
