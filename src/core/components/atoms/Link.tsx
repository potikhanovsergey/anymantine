import { PropsOf } from "@emotion/react"
import { Anchor, AnchorProps } from "@mantine/core"
import NextLink from "next/link"

const Link = (props: AnchorProps & { href: PropsOf<typeof NextLink>["href"] }) => {
  return <Anchor component={NextLink} {...props} />
}

export default Link
