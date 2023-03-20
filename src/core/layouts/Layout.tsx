import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell } from "@mantine/core"
import Header from "./Header"
import { useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const AppDesignTheme = useSelector(appDesignTheme)
  return (
    <>
      <Head>
        <title>{title || "marshadow"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        className={AppDesignTheme.font.variable}
        header={
          <>
            {/* <Slogan /> */}
            <Header />
          </>
        }
        // footer={<Footer />}
        styles={{ main: { paddingLeft: 0, paddingRight: 0, paddingTop: 0 } }}
        fixed={false}
      >
        {children}
      </AppShell>
    </>
  )
}

export default Layout
