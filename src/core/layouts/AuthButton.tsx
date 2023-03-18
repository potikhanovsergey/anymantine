import HeaderButton from "../components/atoms/HeaderButton"
import Link from "next/link"

const AuthButton = () => {
  return (
    <HeaderButton component={Link} href="/login">
      Войти в аккаунт
    </HeaderButton>
  )
}

export default AuthButton
