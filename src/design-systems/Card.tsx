import {
  Box,
  Title,
  Text,
  createStyles,
  AspectRatio,
  Group,
  Badge,
  Anchor,
  Tooltip,
} from "@mantine/core"
import { IconWorld } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  card: {
    borderRight: `1px solid ${theme.black}`,
    borderBottom: `1px solid ${theme.black}`,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.xl,
    textDecoration: "none",
    color: theme.black,
    position: "relative",
    "&:hover": {
      background: theme.colors.violet[0],
    },
  },
  caption: {
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
}))

interface CardProps {
  caption: string
  title: string
  imageUrl: string
  price: number
  id: number
}

const Card = ({ caption, title, imageUrl, price, id }: CardProps) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.card}>
      <Group spacing="xs" mb="xs" className={classes.links}>
        <Tooltip label="https://figma.com">
          <Anchor href="https://figma.com" target="_blank" rel="noreferrer">
            <IconWorld size={20} />
          </Anchor>
        </Tooltip>
      </Group>
      <Link passHref href={`/design-systems/${id}`}>
        <Text className={classes.caption} component="a" weight={300} color="dimmed">
          {caption}
        </Text>
      </Link>
      <Text size={28} mb="xl" weight="bold">
        {title}
      </Text>
      <AspectRatio pos="relative" ratio={16 / 9} mb="md">
        <Image alt="Vercel Geist" layout="fill" src={imageUrl} />
      </AspectRatio>
      <Group position="right">
        <Badge variant="outline">₽{price}</Badge>
      </Group>
    </Box>
  )
}

export default Card
