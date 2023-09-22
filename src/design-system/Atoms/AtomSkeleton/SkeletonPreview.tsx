import { Group, Skeleton } from "@mantine/core"

const SkeletonPreview = () => {
  return (
    <Group w="100%" wrap="wrap" gap={16}>
      <Skeleton height={50} circle mb="sm" />
      <Skeleton h={16} radius="xl" />
      <Skeleton h={16} mt={3} radius="xl" />
      <Skeleton h={16} mt={3} width="70%" radius="xl" />
    </Group>
  )
}

export default SkeletonPreview
