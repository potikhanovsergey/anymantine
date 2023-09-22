import { AppShell, AppShellNavbarProps } from "@mantine/core"
import React from "react"
import { DesignSystemSubPage } from "public/themes"
import NavbarInner from "./NavbarInner"

const Navbar = ({
  subPage,
  ...navbarProps
}: Omit<AppShellNavbarProps, "children"> & { subPage?: DesignSystemSubPage }) => {
  return (
    <AppShell.Navbar {...navbarProps}>
      <NavbarInner subPage={subPage} />
    </AppShell.Navbar>
  )
}

export default Navbar
