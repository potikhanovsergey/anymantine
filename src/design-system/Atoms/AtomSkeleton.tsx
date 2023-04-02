import { Group, Skeleton, Text, useMantineTheme } from "@mantine/core"
import getSkeletonConfigurator from "src/design-system/Configurator/configurators/skeleton"
import { DesignTheme } from "src/state/design-system"
import ComponentDocs, { ComponentDocsProps } from "../ComponentDocs"

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
                {animate ? "Circle prop is true" : "No circle prop"}
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

const AtomSkeletons = () => {
  const theme = useMantineTheme()
  const skeletonConfigurator = getSkeletonConfigurator(theme)
  return (
    <ComponentDocs
      {...skeletonDocsProps}
      preview={{
        configurator: skeletonConfigurator,
        children: (
          <Group w="100%">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={16} radius="xl" />
            <Skeleton height={16} mt={3} radius="xl" />
            <Skeleton height={16} mt={3} width="70%" radius="xl" />
          </Group>
        ),
      }}
    />
  )
}

export default AtomSkeletons
