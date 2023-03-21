import { Group, Skeleton } from "@mantine/core"
import getSkeletonConfigurator from "src/design-system/Configurator/configurators/skeleton"
import ItemPreview from "src/design-system/ItemPreview"
import { DesignTheme } from "src/state/design-system"

const AtomSkeletons = () => {
  const skeletonConfigurator = getSkeletonConfigurator(DesignTheme.peek())
  return (
    <ItemPreview
      configurator={skeletonConfigurator}
      title="Skeleton"
      mantineLink="https://mantine.dev/core/skeleton"
    >
      <Group w="100%">
        <Skeleton height={50} circle mb="xl" />
        <Skeleton height={16} radius="xl" />
        <Skeleton height={16} mt={3} radius="xl" />
        <Skeleton height={16} mt={3} width="70%" radius="xl" />
      </Group>
    </ItemPreview>
  )
}

export default AtomSkeletons
