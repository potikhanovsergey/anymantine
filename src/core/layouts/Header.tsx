import {
  Button,
  Group,
  HeaderProps,
  Header as MantineHeader,
  Select,
  useMantineTheme,
} from "@mantine/core"
import NextLink from "next/link"
import { useSelector } from "@legendapp/state/react"
import designSystems from "src/themes"
import { appDesignThemeSlug } from "src/state"
import { useRouter } from "next/router"
import LogoText from "./LogoText"

// const ProfileMenuOrAuth = dynamic(() => import("./ProfileMenuOrAuth"), { ssr: false })

const Header = (props: Omit<HeaderProps, "children" | "height">) => {
  const theme = useMantineTheme()

  const appDesignThemeValue = useSelector(appDesignThemeSlug)
  const router = useRouter()
  const onSelectTheme = (value) => {
    const slug = router.query.slug?.toString?.()
    if (slug && slug !== value) {
      void router.push(router.asPath.split(slug).join(value), undefined, { scroll: false })
    } else {
      appDesignThemeSlug.set(value)
    }
  }
  return (
    <MantineHeader height={64} px={theme.spacing.md} {...props}>
      <Group h="100%" position="apart" noWrap>
        <Group noWrap h="100%" spacing="lg">
          <LogoText height={40} />
          <Select
            withinPortal
            value={appDesignThemeValue}
            onChange={onSelectTheme}
            size="xs"
            data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          />
        </Group>
        <Group noWrap h="100%" spacing="xs">
          <Button href="/" component={NextLink} size="xs" variant="secondary">
            About
          </Button>
          <Button size="xs" href="/" component={NextLink}>
            Themes
          </Button>
          {/* <ProfileMenuOrAuth /> */}
        </Group>
      </Group>
    </MantineHeader>
  )
}

export default Header
