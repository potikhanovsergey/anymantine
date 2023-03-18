import { Container, Group, Header as MantineHeader, Text, useMantineTheme } from "@mantine/core"
import NextLink from "next/link"
import HeaderButton from "../components/atoms/HeaderButton"
import AuthButton from "./AuthButton"
import { useSession } from "@blitzjs/auth"
import { Show } from "@legendapp/state/react"
import ProfileMenu from "./ProfileMenu"

const Header = () => {
  const theme = useMantineTheme()
  const session = useSession({ suspense: false })
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
            <HeaderButton color="white" href="/design-systems" component={NextLink}>
              Дизайн системы
            </HeaderButton>
            <Show if={session.userId} else={<AuthButton />}>
              <ProfileMenu />
            </Show>
          </Group>
        </Group>
      </Container>
    </MantineHeader>
  )
}

export default Header
