import { Center, MantineNumberSize, Text } from "@mantine/core"
import createStyles from "./CornerItem.styles"

interface CornerItemProps {
  radius: MantineNumberSize
  title: string
  useCases: string[]
}

interface CornerBoxProps {
  radius: MantineNumberSize
}

const CornerBox = ({ radius }: CornerBoxProps) => {
  const { classes } = createStyles({ radius })
  return (
    <Center className={classes.box} mb="md">
      <Text size="md">{radius}</Text>
    </Center>
  )
}

const CornerItem = ({ radius, title, useCases }: CornerItemProps) => {
  return (
    <div>
      <CornerBox radius={radius} />
      <Text weight={500}>{title}</Text>
      {useCases.map((useCase) => (
        <Text size="sm" color="dimmed" key={useCase}>
          {useCase}
        </Text>
      ))}
    </div>
  )
}

export default CornerItem
