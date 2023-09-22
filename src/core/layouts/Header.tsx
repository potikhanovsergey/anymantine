import {
  Group,
  AppShell,
  Select,
  useMantineTheme,
  Drawer,
  AppShellHeaderProps,
  Burger,
} from "@mantine/core"
import NextLink from "next/link"
import { Show, useSelector } from "@legendapp/state/react"
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
    <AppShell.Header px={theme.spacing.md} {...props}>
      {/** Mobile */}
      <Group hiddenFrom="sm" justify="space-between" wrap="nowrap" w="100%">
        <LogoText height={40} />

        <Burger opened={openedDrawer} onClick={open} size="sm" color={theme.colors.gray[6]} />
      </Group>
      {/** Desktop */}
      <Group visibleFrom="sm" w="100%" h="100%" justify="space-between" wrap="nowrap">
        <Group wrap="nowrap" h="100%" gap="lg">
          <NextLink href="/">
            <LogoText height={40} />
          </NextLink>
          <Select
            value={appDesignThemeValue}
            onChange={onSelectTheme}
            size="xs"
            data={designSystems.map((ds) => ({ label: ds.title, value: ds.slug }))}
          />
        </Group>
      </Group>
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
    </AppShell.Header>
  )
}

export default Header
