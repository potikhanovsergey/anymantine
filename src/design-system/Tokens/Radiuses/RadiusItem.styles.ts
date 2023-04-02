import { createStyles, MantineNumberSize, MantineTheme, rem } from "@mantine/core"

interface RadiusItemStylesParams {
  radius: MantineNumberSize
}

export const radiusItemSize = 80

export default createStyles((theme: MantineTheme, { radius }: RadiusItemStylesParams) => ({
  box: {
    borderRadius: theme.fn.radius(radius),
    width: rem(radiusItemSize),
    maxWidth: rem(radiusItemSize),
    aspectRatio: "1/1",
    backgroundColor:
      radius === theme.defaultRadius ? theme.fn.primaryColor() : theme.colors.gray[2],
    color: radius === theme.defaultRadius ? theme.white : theme.black,
  },
}))
