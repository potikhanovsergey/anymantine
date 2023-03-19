import Head from "next/head"
import React, { FC, useEffect } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell, Center, Loader } from "@mantine/core"
import Header from "./Header"
import { font } from "src/themes/Marshmallow"
import Navbar from "src/design-system/Navbar"
import { DesignTheme } from "src/state/design-system"
import { themes } from "src/themes"
import { Show } from "@legendapp/state/react"

const DesignSystemLayout: BlitzLayout<{
  title?: string
  children?: React.ReactNode
  slug: string
}> = ({ title, children, slug }) => {
  useEffect(() => {
    const pageTheme = themes[slug]
    pageTheme && DesignTheme.set(pageTheme)
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
        navbar={<Navbar fixed />}
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
            <Center h="calc(100vh - var(--mantine-header-height))">
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
