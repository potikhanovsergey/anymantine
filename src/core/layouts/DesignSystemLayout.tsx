import Head from "next/head"
import React, { FC, useEffect, useState } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell, Center, Loader, rem } from "@mantine/core"
import Header from "./Header"
import Navbar from "src/design-system/Navbar"
import { DesignSystem, DesignTheme } from "src/state/design-system"
import { DesignSystemSubPage, themes } from "public/themes"
import { Show, useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"

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

  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      className={appFont?.nextFont.variable}
      navbar={{
        breakpoint: "sm",
        width: 256,
      }}
      header={{
        height: 64,
      }}
      styles={{
        main: {
          paddingRight: 0,
          paddingLeft: `var(--app-shell-navbar-width)`,
          paddingTop: `calc(var(--app-shell-header-height) + ${rem(16)})`,
          paddingBottom: rem(32),
          overflowX: "hidden",
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

      <Navbar subPage={subPage} hidden={!opened} />
    </AppShell>
  )
}

export default DesignSystemLayout
