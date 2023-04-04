import { Group, Skeleton, Text, useMantineTheme } from "@mantine/core"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getSkeletonConfigurator from "src/design-system/Configurator/configurators/skeleton"
import SkeletonPreview from "./SkeletonPreview"

const skeletonDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Skeleton",
  description: `Skeleton is a component for displaying the structure of a widget and/or a page during their initial loading.`,
  mantineLink: "https://mantine.dev/core/skeleton",
  examples: [
    {
      title: "Animate prop",
      description: `You can either use static skeleton or animated one with the "animate" boolean prop`,
      children: (
        <Group spacing="xl" position="center">
          {[false, true].map((animate) => (
            <div key={animate + ""}>
              <Text color="dimmed" mb="xs">
                {animate ? "Animate prop is true" : "No animate prop"}
              </Text>
              <Skeleton height={80} width={80} animate={animate} />
            </div>
          ))}
        </Group>
      ),
    },
    {
      title: "Circle prop",
      description: `If true width, height and border-radius will equal to value specified in height prop`,
      children: (
        <Group spacing="xl" position="center">
          {[false, true].map((circle) => (
            <div key={circle + ""}>
              <Text color="dimmed" mb="xs">
                {circle ? "Circle prop is true" : "No circle prop"}
              </Text>
              <Skeleton height={80} width={80} circle={circle} />
            </div>
          ))}
        </Group>
      ),
    },
  ],
}

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
