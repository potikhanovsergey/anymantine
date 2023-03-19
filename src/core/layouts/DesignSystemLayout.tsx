import Head from "next/head"
import React, { FC, useEffect } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell, Center, Loader } from "@mantine/core"
import Header from "./Header"
import { font } from "src/themes/Marshmallow"
import Navbar from "src/design-system/Navbar"
import { DesignSystem, DesignTheme } from "src/state/design-system"
import { DesignSystemSubPage, themes } from "src/themes"
import { Show } from "@legendapp/state/react"

const DesignSystemLayout: BlitzLayout<{
  title?: string
  children?: React.ReactNode
  slug: string
  subPage: DesignSystemSubPage
}> = ({ title, children, slug, subPage }) => {
  useEffect(() => {
    const pageTheme = themes[slug]
    pageTheme && DesignSystem.set({ label: slug, theme: pageTheme })
  }, [slug])

  return (
    <>
      <Head>
        <title>{title || "marshadow"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        className={font.variable}
        header={<Header fixed />}
        navbar={<Navbar subPage={subPage} fixed />}
        styles={{
          main: {
            paddingRight: 0,
            paddingLeft: "var(--mantine-navbar-width)",
            paddingTop: "var(--mantine-header-height)",
          },
        }}
        fixed={false}
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
    </>
  )
}

export default DesignSystemLayout
