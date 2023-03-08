import { Title, Text, createStyles, CardProps, SimpleGridProps, SimpleGrid } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  grid: {
    borderTop: `1px solid ${theme.black}`,
    borderLeft: `1px solid ${theme.black}`,
    gap: 0,
  },
}))

const Grid = ({ className, ...props }: SimpleGridProps) => {
  const { classes, cx } = useStyles()
  return <SimpleGrid className={cx(classes.grid, className)} {...props} />
}

export default Grid
