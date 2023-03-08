import { Group } from "@mantine/core"
import Link from "../components/atoms/Link"

const Nav = () => {
  return (
    <nav>
      <Group noWrap spacing="sm">
        <Link href="/teams">Командам</Link>
        <Link href="/developers">Разработчикам</Link>
        <Link href="/designers">Дизайнерам</Link>
      </Group>
    </nav>
  )
}

export default Nav
