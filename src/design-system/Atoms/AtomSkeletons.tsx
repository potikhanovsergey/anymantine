import { Group, Skeleton, Text } from "@mantine/core"
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
        <Group spacing="xl">
          <div>
            <Text color="dimmed" mb="xs">
              No animation
            </Text>
            <Skeleton height={80} circle animate={false} />
          </div>
          <div>
            <Text color="dimmed" mb="xs">
              Animated one
            </Text>

            <Skeleton height={80} circle />
          </div>
        </Group>
      ),
    },
    {
      title: "Circle prop",
      description: `If true width, height and border-radius will equal to value specified in height prop`,
      children: (
        <Group spacing="xl">
          <div>
            <Text color="dimmed" mb="xs">
              No circle prop
            </Text>
            <Skeleton height={80} width={80} />
          </div>
          <div>
            <Text color="dimmed" mb="xs">
              Circle prop is true
            </Text>

            <Skeleton height={80} width={80} circle />
          </div>
        </Group>
      ),
    },
  ],
}

const AtomSkeletons = () => {
  const skeletonConfigurator = getSkeletonConfigurator(DesignTheme.peek())
  return (
    <ComponentDocs
      {...skeletonDocsProps}
      preview={{
        title: "Skeleton",
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
