import { Box, MantineProvider, MantineShadow, Text } from "@mantine/core"
import createStyles from "./ShadowItem.styles"
import { DesignTheme } from "src/state/design-system"
import { observer } from "@legendapp/state/react"

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
  return <Box className={classes.box} mb="md" />
}

const ShadowItem = ({ shadow, title, useCases }: ShadowItemProps) => {
  return (
    <Box>
      <MantineProvider theme={DesignTheme.get() || undefined}>
        <ShadowBox shadow={shadow} />
      </MantineProvider>
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
