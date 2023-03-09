import {
  Container,
  Group,
  Header as MantineHeader,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core"
import { useSession } from "@blitzjs/auth"
import { Suspense } from "react"
import Nav from "./Nav"
import Link from "../components/atoms/Link"
import NextLink from "next/link"

const AuthButton = () => {
  const session = useSession()

  return !session.userId ? <Button size="xs">Войти в аккаунт</Button> : null
}

const Header = () => {
  const theme = useMantineTheme()
  return (
    <MantineHeader
      height={80}
      sx={{
        background: theme.colorScheme === "dark" ? "#161920" : theme.white,
      }}
    >
      <Container size="xl" h="100%">
        <Group h="100%" position="apart" noWrap>
          <Group noWrap spacing="xl">
            <Title size={24}>Marshadow</Title>
            <Nav />
          </Group>
          <Group noWrap>
            <NextLink href="/design-systems" passHref>
              <Button size="xs" variant="outline" component="a">
                Дизайн системы
              </Button>
            </NextLink>
            <Suspense>
              <AuthButton />
            </Suspense>
          </Group>
        </Group>
      </Container>
    </MantineHeader>
  )
}

export default Header
