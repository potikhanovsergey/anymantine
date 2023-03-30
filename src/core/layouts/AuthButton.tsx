import { Button } from "@mantine/core"
import Link from "next/link"

const AuthButton = () => {
  return (
    <Button size="xs" component={Link} href="/login">
      Войти в аккаунт
    </Button>
  )
}

export default AuthButton
