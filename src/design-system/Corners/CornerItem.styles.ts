import { createStyles, MantineNumberSize, MantineTheme, rem } from "@mantine/core"

interface CornerItemStylesParams {
  radius: MantineNumberSize
}

const size = 64

export default createStyles((theme: MantineTheme, { radius }: CornerItemStylesParams) => ({
  box: {
    borderRadius: theme.fn.radius(radius),
    width: "100%",
    maxWidth: rem(size),
    aspectRatio: "1/1",
    border: `2px solid ${theme.colors.violet[5]}`,
  },
}))
