import { Container, Group, Header as MantineHeader, Text, useMantineTheme } from "@mantine/core"
import { useSession } from "@blitzjs/auth"
import { Suspense } from "react"
import Nav from "./Nav"
import NextLink from "next/link"
import HeaderButton from "../components/atoms/HeaderButton"

const AuthButton = () => {
  const session = useSession()
  return !session.userId ? <HeaderButton>Войти в аккаунт</HeaderButton> : null
}

const Header = () => {
  const theme = useMantineTheme()
  return (
    <MantineHeader
      height={64}
      sx={{
        background: theme.colors.violet[0],
      }}
    >
      <Container size="xl" h="100%" pr={0}>
        <Group h="100%" position="apart" noWrap>
          <Group noWrap h="100%" spacing={0}>
            <Text
              size={24}
              weight="bold"
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingRight: theme.spacing.lg,
              }}
            >
              Marshadow
            </Text>
            {/* <Nav /> */}
          </Group>
          <Group noWrap h="100%" spacing="xs">
            <NextLink href="/design-systems" passHref>
              <HeaderButton color="white" component="a">
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
