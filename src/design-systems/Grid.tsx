import { Title, Text, createStyles, CardProps, SimpleGridProps, SimpleGrid } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  grid: {
    gap: theme.spacing.md,
  },
}))

const Grid = ({ className, ...props }: SimpleGridProps) => {
  const { classes, cx } = useStyles()
  return <SimpleGrid className={cx(classes.grid, className)} {...props} />
}

export default Grid
