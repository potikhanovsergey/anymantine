import { createStyles, MantineNumberSize, MantineTheme, rem } from "@mantine/core"

interface CornerItemStylesParams {
  radius: MantineNumberSize
}

const size = 96

export default createStyles((theme: MantineTheme, { radius }: CornerItemStylesParams) => ({
  box: {
    borderRadius: theme.fn.radius(radius),
    width: rem(size),
    maxWidth: rem(size),
    aspectRatio: "1/1",
    backgroundColor: theme.colors.gray[2],
  },
}))
