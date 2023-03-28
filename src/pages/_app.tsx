import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import { MantineProvider } from "@mantine/core"
import { enableLegendStateReact, useSelector } from "@legendapp/state/react"
import { appDesignTheme, appDesignThemeSlug } from "src/state"
import RouterTransition from "src/core/layouts/RouterTransition"
import { useRouter } from "next/router"

enableLegendStateReact()

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

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

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const AppDesignTheme = useSelector(appDesignTheme.theme)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={AppDesignTheme}>
      <RouterTransition />
      <ThemeRouteListener />
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </MantineProvider>
  )
}

export default withBlitz(MyApp)
