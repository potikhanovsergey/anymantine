import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import { MantineProvider } from "@mantine/core"
import { enableLegendStateReact, useObserve, useSelector } from "@legendapp/state/react"
import MarshmallowTheme from "src/themes/Marshmallow"
import { appDesignTheme } from "src/state"

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

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const AppDesignTheme = useSelector(appDesignTheme)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={AppDesignTheme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </MantineProvider>
  )
}

export default withBlitz(MyApp)
