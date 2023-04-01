import React from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell } from "@mantine/core"
import Header from "./Header"
import { useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"

const Layout: BlitzLayout<{ children: React.ReactNode }> = ({ children }) => {
  const appFont = useSelector(appDesignTheme.font)
  return (
    <AppShell
      className={appFont.nextFont.variable}
      header={<Header />}
      styles={{ main: { paddingLeft: 0, paddingRight: 0, paddingTop: 0 } }}
      fixed={false}
    >
      {children}
    </AppShell>
  )
}

export default Layout
