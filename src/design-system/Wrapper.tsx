import { Box, createStyles, BoxProps } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    border: `1px solid ${theme.black}`,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.xl,
  },
}))

const Wrapper = ({ className, ...props }: BoxProps) => {
  const { classes, cx } = useStyles()
  return <Box className={cx(classes.wrapper, className)} {...props} />
}

export default Wrapper
