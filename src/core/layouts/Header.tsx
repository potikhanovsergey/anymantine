import {
  Group,
  HeaderProps,
  Header as MantineHeader,
  Select,
  useMantineTheme,
  Burger,
  MediaQuery,
  Drawer,
} from "@mantine/core"
import NextLink from "next/link"
import { Show, useSelector } from "@legendapp/state/react"
import designSystems, { DesignSystemSubPage } from "public/themes"
import { appDesignThemeSlug } from "src/state"
import { useRouter } from "next/router"
import LogoText from "./LogoText"
import { useDisclosure } from "@mantine/hooks"
import NavbarInner from "src/design-system/Navbar/NavbarInner"

// const ProfileMenuOrAuth = dynamic(() => import("./ProfileMenuOrAuth"), { ssr: false })

const Header = ({
  subPage,
  ...props
}: Omit<HeaderProps, "children" | "height"> & { subPage?: DesignSystemSubPage }) => {
  const theme = useMantineTheme()

  const appDesignThemeValue = useSelector(appDesignThemeSlug)
  const router = useRouter()

  const slug = router.query.slug?.toString?.()

  const onSelectTheme = (value) => {
    if (slug && slug !== value) {
      void router.push(router.asPath.split(slug).join(value), undefined, { scroll: false })
    } else {
      appDesignThemeSlug.set(value)
    }
  }

  const [openedDrawer, { open, close }] = useDisclosure(false)

  return (
    <MantineHeader height={64} px={theme.spacing.md} {...props}>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Group position="apart" noWrap w="100%" h="100%">
          <NextLink href="/">
            <LogoText height={40} />
          </NextLink>

          <Burger opened={openedDrawer} onClick={open} size="sm" color={theme.colors.gray[6]} />
        </Group>
      </MediaQuery>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Group h="100%" position="apart" noWrap>
          <Group noWrap h="100%" spacing="lg">
            <NextLink href="/">
              <LogoText height={40} />
            </NextLink>
            <Select
              withinPortal
              value={appDesignThemeValue}
              onChange={onSelectTheme}
              size="xs"
              data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
            />
          </Group>
          {/* <Group noWrap h="100%" spacing="xs">
            <Button href="/" component={NextLink} size="xs" variant="secondary">
              About
            </Button>
            <Button size="xs" href="/" component={NextLink}>
              Themes
            </Button>
            <ProfileMenuOrAuth />
          </Group> */}
        </Group>
      </MediaQuery>

      <Drawer
        opened={openedDrawer}
        onClose={close}
        title="Меню"
        position="top"
        size="100%"
        styles={{
          header: {
            zIndex: 100,
          },
        }}
      >
        <Select
          withinPortal
          value={appDesignThemeValue}
          onChange={onSelectTheme}
          size="xs"
          data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          mb="md"
        />
        <Show if={slug}>
          <NavbarInner subPage={subPage} />
        </Show>
      </Drawer>
    </MantineHeader>
  )
}

export default Header
