import {
  Button,
  Container,
  Group,
  HeaderProps,
  Header as MantineHeader,
  Text,
  useMantineTheme,
} from "@mantine/core"
import NextLink from "next/link"
import AuthButton from "./AuthButton"
import { useSession } from "@blitzjs/auth"
import { Show } from "@legendapp/state/react"
import ProfileMenu from "./ProfileMenu"

const Header = (props: Omit<HeaderProps, "children" | "height">) => {
  const theme = useMantineTheme()
  const session = useSession({ suspense: false })
  return (
    <MantineHeader height={64} px={theme.spacing.md} {...props}>
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
            Themeo
          </Text>
        </Group>
        <Group noWrap h="100%" spacing="xs">
          <Button size="xs" color="white" href="/design-systems" component={NextLink}>
            Дизайн системы
          </Button>
          <Show if={session.userId} else={<AuthButton />}>
            <ProfileMenu />
          </Show>
        </Group>
      </Group>
    </MantineHeader>
  )
}

export default Header
