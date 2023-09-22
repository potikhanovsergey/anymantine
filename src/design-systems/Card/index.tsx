import { Text, AspectRatio, Stack } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
import classes from "./Card.module.css"

interface CardProps {
  title: string
  imageUrl: string
  slug: number | string
}

const Card = ({ title, imageUrl, slug }: CardProps) => {
  return (
    <div className={classes.card}>
      <AspectRatio pos="relative" ratio={16 / 9}>
        <Image alt={`${title} theme`} fill src={imageUrl} className={classes.image} />
      </AspectRatio>
      <Stack className={classes.description}>
        <Text size="lg" fw="bold" href={`/${slug}`} component={Link} className={classes.title}>
          {title}
        </Text>
      </Stack>
    </div>
  )
}

export default Card
