import { Text, createStyles, AspectRatio, Group, Badge, Stack } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.black}`,
    borderRadius: theme.radius.md,
    display: "flex",
    flexDirection: "column",
    padding: 0,
    textDecoration: "none",
    color: theme.black,
    position: "relative",
    "&:hover": {
      background: theme.colors[theme.primaryColor][0],
    },
  },
  description: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    gap: 0,
  },
  title: {
    "&:after": {
      content: "''",
      position: "absolute",
      cursor: "pointer",
      zIndex: 1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  links: {
    "> a": {
      position: "relative",
      zIndex: 2,
    },
  },
  image: {
    borderTopRightRadius: theme.radius.md,
    borderTopLeftRadius: theme.radius.md,
  },
}))

interface CardProps {
  title: string
  imageUrl: string
  slug: number | string
}

const Card = ({ title, imageUrl, slug }: CardProps) => {
  const { classes } = useStyles()
  return (
    <div className={classes.card}>
      <AspectRatio pos="relative" ratio={16 / 9}>
        <Image alt="Vercel Geist" fill src={imageUrl} className={classes.image} />
      </AspectRatio>
      <Stack className={classes.description}>
        <Text size={28} weight="bold" href={`/${slug}`} component={Link} className={classes.title}>
          {title}
        </Text>
        <Group spacing="xs" mb="xs">
          <Badge variant="outline" size="sm">
            with Figma
          </Badge>
          <Badge variant="outline" size="sm">
            calm
          </Badge>
          <Badge variant="outline" size="sm">
            colorful
          </Badge>
        </Group>
      </Stack>
    </div>
  )
}

export default Card
