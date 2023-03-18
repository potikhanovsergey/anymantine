import { Group, UnstyledButton, useMantineTheme } from "@mantine/core"
import HeaderButton from "../components/atoms/HeaderButton"
import Link from "next/link"

const Nav = () => {
  const theme = useMantineTheme()

  return (
    <nav style={{ height: "100%" }}>
      <Group noWrap spacing={0} h="100%">
        <HeaderButton component={Link} href="/teams">
          Командам
        </HeaderButton>
        <HeaderButton component={Link} href="/developers">
          Разработчикам
        </HeaderButton>
        <HeaderButton component={Link} href="/designers">
          Дизайнерам
        </HeaderButton>
      </Group>
    </nav>
  )
}

export default Nav
