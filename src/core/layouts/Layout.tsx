import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { AppShell } from "@mantine/core"
import Header from "./Header"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "marshadow"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        header={<Header />}
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
