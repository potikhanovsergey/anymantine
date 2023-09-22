import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell } from "@mantine/core"
import Header from "./Header"
import { useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"
import Footer from "./Footer"

const Layout: BlitzLayout<{ children: React.ReactNode }> = ({ children }) => {
  const appFont = useSelector(appDesignTheme.font)
  return (
    <AppShell
      header={{
        height: 64,
      }}
      className={appFont?.nextFont?.variable}
      styles={{
        main: { paddingLeft: 0, paddingRight: 0 },
      }}
    >
      <Header />
      <AppShell.Main>{children}</AppShell.Main>
      <Footer />
    </AppShell>
  )
}

export default Layout
