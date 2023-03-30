import { useSession } from "@blitzjs/auth"
import { Show } from "@legendapp/state/react"
import dynamic from "next/dynamic"

const ProfileMenu = dynamic(() => import("./ProfileMenu"))
const AuthButton = dynamic(() => import("./AuthButton"))

const ProfileMenuOrAuth = () => {
  const session = useSession()
  return (
    <Show if={session.userId} else={<AuthButton />}>
      <ProfileMenu />
    </Show>
  )
}

export default ProfileMenuOrAuth
