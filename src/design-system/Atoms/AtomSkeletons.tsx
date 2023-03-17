import { Group, Skeleton } from "@mantine/core"
import SkeletonConfigurator from "src/design-system/Configurator/configurators/skeleton"
import ItemPreview from "src/design-system/ItemPreview"

interface AtomSkeletonsProps {
  opened: boolean
  onToggleConfigurator: () => void
}

const AtomSkeletons = ({ opened, onToggleConfigurator }: AtomSkeletonsProps) => {
  return (
    <ItemPreview
      opened={opened}
      onToggleConfigurator={onToggleConfigurator}
      configurator={SkeletonConfigurator}
      title="Скелетоны"
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
