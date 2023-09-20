import { Box, MantineShadow, Text } from "@mantine/core"
// import createStyles from "./ShadowItem.styles"

interface ShadowItemProps {
  shadow: MantineShadow
  title: string
  useCases: string[]
}

interface ShadowBoxProps {
  shadow: MantineShadow
}

const ShadowBox = ({ shadow }: ShadowBoxProps) => {
  // const { classes } = createStyles({ shadow })
  return null
  // return <div className={classes.box} />
}

const ShadowItem = ({ shadow, title, useCases }: ShadowItemProps) => {
  return (
    <Box>
      <ShadowBox shadow={shadow} />
      {/* <Text weight={500}>{title}</Text> */}
      {useCases.map((useCase) => (
        <Text size="sm" color="dimmed" key={useCase}>
          {useCase}
        </Text>
      ))}
    </Box>
  )
}

export default ShadowItem
