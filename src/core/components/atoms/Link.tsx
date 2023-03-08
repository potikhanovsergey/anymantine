import { PropsOf } from "@emotion/react"
import { Anchor, AnchorProps } from "@mantine/core"
import NextLink from "next/link"

const Link = ({ href, ...props }: AnchorProps & { href: PropsOf<typeof NextLink>["href"] }) => {
  return (
    <NextLink href={href} passHref>
      <Anchor {...props} />
    </NextLink>
  )
}

export default Link
