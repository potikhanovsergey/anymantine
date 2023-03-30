import { Box, MantineShadow, Text } from "@mantine/core"
import createStyles from "./ShadowItem.styles"
import DesignSystemProvider from "src/design-system/DesignSystemProvider"

interface ShadowItemProps {
  shadow: MantineShadow
  title: string
  useCases: string[]
}

interface ShadowBoxProps {
  shadow: MantineShadow
}

const ShadowBox = ({ shadow }: ShadowBoxProps) => {
  const { classes } = createStyles({ shadow })
  return <div className={classes.box} />
}

const ShadowItem = ({ shadow, title, useCases }: ShadowItemProps) => {
  return (
    <Box>
      <DesignSystemProvider>
        <ShadowBox shadow={shadow} />
      </DesignSystemProvider>
      <Text weight={500}>{title}</Text>
      {useCases.map((useCase) => (
        <Text size="sm" color="dimmed" key={useCase}>
          {useCase}
        </Text>
      ))}
    </Box>
  )
}

export default ShadowItem
