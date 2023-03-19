import { Box, createStyles, keyframes, Text, getStylesRef, Anchor } from "@mantine/core"

export const motion = keyframes({
  "0%": { transform: "translate(0%, 0px)" },
  "100%": { transform: "translate(-50%, 0px);" },
})

const useStyles = createStyles((theme) => ({
  row: {
    ref: getStylesRef("row"),
    display: "flex",
    whiteSpace: "nowrap",
    animation: `${motion} 120s infinite linear`,
  },
  wrapper: {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    borderBottom: `1px solid ${theme.black}`,
    backgroundColor: theme.colors[theme.primaryColor][1],
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    textDecoration: "none",
    color: theme.black,
    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][2],
      [`& .${getStylesRef("row")}`]: {
        animationPlayState: "paused",
      },
    },
  },
}))

const Slogan = () => {
  const { classes } = useStyles()

  return (
    <Box component="a" href="#" className={classes.wrapper}>
      <Box className={classes.row}>
        {[0, 1].map((link) => (
          <Box key={link} sx={{ display: "flex", gap: 16, height: "100%" }}>
            {[0, 1, 2, 3].map((item) => (
              <Text key={item} size="xs">
                Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные
                тексты.
              </Text>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Slogan
