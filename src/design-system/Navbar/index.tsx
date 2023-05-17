import { Navbar as MantineNavbar, NavbarProps } from "@mantine/core"
import React from "react"
import { DesignSystemSubPage } from "public/themes"
import { useRouter } from "next/router"
import NavbarInner from "./NavbarInner"

const Navbar = ({
  subPage,
  ...navbarProps
}: Omit<NavbarProps, "children"> & { subPage?: DesignSystemSubPage }) => {
  const router = useRouter()
  return (
    <MantineNavbar {...navbarProps} width={{ base: 256 }}>
      <NavbarInner subPage={subPage} />
    </MantineNavbar>
  )
}

export default Navbar
