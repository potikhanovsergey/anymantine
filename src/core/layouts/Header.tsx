import {
  Button,
  Group,
  AppShell,
  Select,
  useMantineTheme,
  Drawer,
  Stack,
  AppShellHeaderProps,
} from "@mantine/core"
import NextLink from "next/link"
import { useSelector } from "@legendapp/state/react"
import designSystems, { DesignSystemSubPage } from "public/themes"
import { appDesignThemeSlug } from "src/state"
import { useRouter } from "next/router"
import LogoText from "./LogoText"
import { useDisclosure } from "@mantine/hooks"
import NavbarInner from "src/design-system/Navbar/NavbarInner"

const Header = ({
  subPage,
  ...props
}: Omit<AppShellHeaderProps, "children" | "height"> & { subPage?: DesignSystemSubPage }) => {
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

  const [openedDrawer, { open, close }] = useDisclosure(false)

  return (
    <AppShell.Header px={theme.spacing.md} {...props}>
      {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Group justify="space-between" wrap="nowrap" w="100%">
          <LogoText height={40} />

          <Burger opened={openedDrawer} onClick={open} size="sm" color={theme.colors.gray[6]} />
        </Group>
      </MediaQuery> */}

      {/* <MediaQuery smallerThan="sm" styles={{ display: "none" }}> */}
      <Group w="100%" h="100%" justify="space-between" wrap="nowrap">
        <Group wrap="nowrap" h="100%" gap="lg">
          <LogoText height={40} />
          <Select
            // withinPortal
            value={appDesignThemeValue}
            onChange={onSelectTheme}
            size="xs"
            data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          />
        </Group>
        <Group wrap="nowrap" h="100%" gap="xs">
          <Button href="/" component={NextLink} size="xs" variant="secondary">
            About
          </Button>
          <Button size="xs" href="/" component={NextLink}>
            Themes
          </Button>
        </Group>
      </Group>
      {/* </MediaQuery> */}

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
        <Stack>
          <Select
            // withinPortal
            value={appDesignThemeValue}
            onChange={onSelectTheme}
            size="xs"
            data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          />
          <Button href="/" component={NextLink} size="xs" variant="secondary">
            About
          </Button>
          <Button size="xs" href="/" component={NextLink}>
            Themes
          </Button>
        </Stack>
        <NavbarInner subPage={subPage} />
      </Drawer>
    </AppShell.Header>
  )
}

export default Header
