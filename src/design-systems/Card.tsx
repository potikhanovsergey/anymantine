import { Box, Title, Text, createStyles, AspectRatio, Group, Badge, Anchor } from "@mantine/core"
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
      background: theme.colors.gray[0],
    },
  },
  caption: {
    "&:after": {
      position: "absolute",
      cursor: "pointer",
      zIndex: 10,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
}))

interface CardProps {}

const Card = ({}: CardProps) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.card}>
      <Group spacing="xs" mb="xs">
        <Anchor href="https://figma.com" target="_blank" rel="noreferrer">
          <IconWorld size={20} />
        </Anchor>
      </Group>
      <Link passHref href="/design-systems/1">
        <Text className={classes.caption} component="a" weight={300} color="dimmed">
          Vercel
        </Text>
      </Link>
      <Text size={28} mb="xl" weight="bold">
        Geist
      </Text>
      <AspectRatio pos="relative" ratio={16 / 9} mb="md">
        <Image
          alt="Vercel Geist"
          layout="fill"
          src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1671111035%2Fgeist%2Fgeist-illustration-light.png&w=1920&q=100"
        />
      </AspectRatio>
      <Group position="right">
        <Badge>₽299</Badge>
      </Group>
    </Box>
  )
}

export default Card
