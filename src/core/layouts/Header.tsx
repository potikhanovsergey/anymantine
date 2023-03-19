import {
  Button,
  Container,
  Group,
  HeaderProps,
  Header as MantineHeader,
  Select,
  Text,
  useMantineTheme,
} from "@mantine/core"
import NextLink from "next/link"
import AuthButton from "./AuthButton"
import { useSession } from "@blitzjs/auth"
import { Show, useSelector } from "@legendapp/state/react"
import ProfileMenu from "./ProfileMenu"
import designSystems from "src/themes"
import { appDesignThemeSlug } from "src/state"

const Header = (props: Omit<HeaderProps, "children" | "height">) => {
  const theme = useMantineTheme()
  const session = useSession({ suspense: false })

  const appDesignThemeValue = useSelector(appDesignThemeSlug)
  const onSelectTheme = (value) => {
    appDesignThemeSlug.set(value)
  }
  return (
    <MantineHeader height={64} px={theme.spacing.md} {...props}>
      <Group h="100%" position="apart" noWrap>
        <Group noWrap h="100%" spacing="lg">
          <Text
            size={24}
            weight="bold"
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Themeo
          </Text>
          <Select
            withinPortal
            value={appDesignThemeValue}
            onChange={onSelectTheme}
            size="xs"
            data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          />
        </Group>
        <Group noWrap h="100%" spacing="xs">
          <Button size="xs" variant="secondary" href="/design-systems" component={NextLink}>
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
