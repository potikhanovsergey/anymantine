import { AppShell, AppShellNavbarProps } from "@mantine/core"
import React from "react"
import { DesignSystemSubPage } from "public/themes"
import { useRouter } from "next/router"
import NavbarInner from "./NavbarInner"

const Navbar = ({
  subPage,
  ...navbarProps
}: Omit<AppShellNavbarProps, "children"> & { subPage?: DesignSystemSubPage }) => {
  const router = useRouter()
  return (
    <AppShell.Navbar {...navbarProps}>
      <NavbarInner subPage={subPage} />
    </AppShell.Navbar>
  )
}

export default Navbar
