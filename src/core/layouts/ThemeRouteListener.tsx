import { useSelector } from "@legendapp/state/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { appDesignThemeSlug } from "src/state"

const ThemeRouteListener = () => {
  const router = useRouter()
  const appDesignThemeValue = useSelector(appDesignThemeSlug)

  useEffect(() => {
    const handleRouteChange = () => {
      const slug = router.query.slug?.toString?.()

      if (slug && slug !== appDesignThemeValue) {
        appDesignThemeSlug.set(slug as typeof appDesignThemeValue)
      }
    }

    router.events.on("routeChangeStart", handleRouteChange)
    handleRouteChange()
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [router])
  return null
}

export default ThemeRouteListener
