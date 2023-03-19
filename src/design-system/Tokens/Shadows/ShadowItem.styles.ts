import { createStyles, MantineNumberSize, MantineShadow, MantineTheme, rem } from "@mantine/core"

interface ShadowItemStylesParams {
  shadow: MantineShadow
}

const size = 96

export default createStyles((theme: MantineTheme, { shadow }: ShadowItemStylesParams) => ({
  box: {
    boxShadow: theme.shadows[shadow],
    width: rem(size),
    maxWidth: rem(size),
    aspectRatio: "1/1",
    background: theme.colors.gray[2],
  },
}))
