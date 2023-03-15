import {
  Container,
  Group,
  Header as MantineHeader,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core"
import { useSession } from "@blitzjs/auth"
import { Suspense } from "react"
import Nav from "./Nav"
import Link from "../components/atoms/Link"
import NextLink from "next/link"
import HeaderButton from "../components/atoms/HeaderButton"

const AuthButton = () => {
  const session = useSession()
  const theme = useMantineTheme()
  return !session.userId ? <HeaderButton variant="filled">Войти в аккаунт</HeaderButton> : null
}

const Header = () => {
  const theme = useMantineTheme()
  return (
    <MantineHeader
      height={64}
      sx={{
        background: theme.white,
        borderBottom: `1px solid ${theme.black}`,
      }}
    >
      <Container size="xl" h="100%" pr={0}>
        <Group h="100%" position="apart" noWrap>
          <Group noWrap h="100%" spacing={0}>
            <Text
              size={24}
              weight="bold"
              sx={{
                borderRight: `1px solid ${theme.black}`,
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingRight: theme.spacing.lg,
              }}
            >
              Marshadow
            </Text>
            <Nav />
          </Group>
          <Group noWrap h="100%" spacing={0}>
            <NextLink href="/design-systems" passHref>
              <HeaderButton component="a" withLeftBorder>
                Дизайн системы
              </HeaderButton>
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
