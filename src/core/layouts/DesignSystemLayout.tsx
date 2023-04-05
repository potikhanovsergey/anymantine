import Head from "next/head"
import React, { FC, useEffect } from "react"
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
  return (
    <AppShell
      className={appFont.nextFont.variable}
      header={<Header />}
      navbar={<Navbar subPage={subPage} />}
      styles={{
        main: {
          paddingRight: 0,
          paddingLeft: `calc(var(--mantine-navbar-width) + ${rem(16)})`,
          paddingTop: `calc(var(--mantine-header-height) + ${rem(16)})`,
          overflowX: "hidden",
        },
      }}
    >
      <Show
        if={DesignTheme}
        else={
          <Center h="calc(90vh - var(--mantine-header-height))">
            <Loader variant="bars" size="md" />
          </Center>
        }
      >
        {children}
      </Show>
    </AppShell>
  )
}

export default DesignSystemLayout
