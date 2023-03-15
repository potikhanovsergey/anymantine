import { Group, UnstyledButton, useMantineTheme } from "@mantine/core"
import HeaderButton from "../components/atoms/HeaderButton"
import Link from "next/link"

const Nav = () => {
  const theme = useMantineTheme()

  return (
    <nav style={{ height: "100%" }}>
      <Group noWrap spacing={0} h="100%">
        <Link passHref href="/teams">
          <HeaderButton component="a">Командам</HeaderButton>
        </Link>
        <Link passHref href="/developers">
          <HeaderButton component="a">Разработчикам</HeaderButton>
        </Link>
        <Link passHref href="/designers">
          <HeaderButton component="a">Дизайнерам</HeaderButton>
        </Link>
      </Group>
    </nav>
  )
}

export default Nav
