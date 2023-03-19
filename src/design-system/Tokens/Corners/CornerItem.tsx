import {
  Box,
  Center,
  MantineNumberSize,
  MantineProvider,
  Text,
  useMantineTheme,
} from "@mantine/core"
import createStyles from "./CornerItem.styles"
import { DesignTheme } from "src/state/design-system"

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
      <MantineProvider theme={DesignTheme.peek()}>
        <CornerBox radius={radius} />
      </MantineProvider>
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
