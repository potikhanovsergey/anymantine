import {
  Button,
  Group,
  HeaderProps,
  Header as MantineHeader,
  Select,
  Text,
  useMantineTheme,
} from "@mantine/core"
import NextLink from "next/link"
import { useSelector } from "@legendapp/state/react"
import designSystems from "src/themes"
import { appDesignThemeSlug } from "src/state"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

// const ProfileMenuOrAuth = dynamic(() => import("./ProfileMenuOrAuth"), { ssr: false })

const Header = (props: Omit<HeaderProps, "children" | "height">) => {
  const theme = useMantineTheme()

  const appDesignThemeValue = useSelector(appDesignThemeSlug)
  const router = useRouter()
  const onSelectTheme = (value) => {
    const slug = router.query.slug?.toString?.()
    if (slug && slug !== value) {
      void router.push(router.asPath.split(slug).join(value))
    } else {
      appDesignThemeSlug.set(value)
    }
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
            Animantine
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
          <Button size="xs" variant="secondary" href="/" component={NextLink}>
            Themes
          </Button>
          {/* <ProfileMenuOrAuth /> */}
        </Group>
      </Group>
    </MantineHeader>
  )
}

export default Header
