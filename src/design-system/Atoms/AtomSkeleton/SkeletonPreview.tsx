import { Group, Skeleton } from "@mantine/core"

const SkeletonPreview = () => {
  return (
    <Group w="100%">
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={16} radius="xl" />
      <Skeleton height={16} mt={3} radius="xl" />
      <Skeleton height={16} mt={3} width="70%" radius="xl" />
    </Group>
  )
}

export default SkeletonPreview
