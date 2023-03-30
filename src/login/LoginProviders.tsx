import { Button, Stack } from "@mantine/core"
import Link from "next/link"

const LoginProviders = () => {
  return (
    <Stack>
      <Button component={Link} href="/api/auth/github">
        Sign in with Github
      </Button>
      <Button disabled>Sign in with Google</Button>
      <Button disabled>Sign in with Facebook</Button>
    </Stack>
  )
}

export default LoginProviders
