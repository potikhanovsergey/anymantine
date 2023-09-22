import React, { useEffect } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell, Center, Loader, rem } from "@mantine/core"
import Header from "./Header"
import Navbar from "src/design-system/Navbar"
import { DesignSystem, DesignTheme } from "src/state/design-system"
import { DesignSystemSubPage, themes } from "public/themes"
import { Show, useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"
import Footer from "./Footer"

const DesignSystemLayout: BlitzLayout<{
  children: React.ReactNode
  slug: keyof typeof themes
  subPage: DesignSystemSubPage
}> = ({ children, slug, subPage }) => {
  useEffect(() => {
    const designSystem = themes[slug]
    designSystem &&
      DesignSystem.set({ label: slug, theme: designSystem.theme, font: designSystem.font })
  }, [slug])

  const appFont = useSelector(appDesignTheme.font)
  return (
    <AppShell
      className={appFont?.nextFont.variable}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: true },
        width: 256,
      }}
      header={{
        height: 64,
      }}
      footer={{
        height: 48,
      }}
      styles={{
        main: {
          paddingRight: 0,
          paddingTop: `calc(var(--app-shell-header-height) + ${rem(16)})`,
          paddingBottom: `calc(var(--app-shell-footer-height) + ${rem(32)})`,
        },
      }}
    >
      <Header subPage={subPage} />
      <AppShell.Main>
        <Show
          if={DesignTheme}
          else={
            <Center h="calc(90vh - var(--app-shell-header-height))">
              <Loader variant="bars" size="md" />
            </Center>
          }
        >
          {children}
        </Show>
      </AppShell.Main>

      <Navbar subPage={subPage} />
      <Footer />
    </AppShell>
  )
}

export default DesignSystemLayout
