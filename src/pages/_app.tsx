import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import { MantineProvider, useMantineTheme } from "@mantine/core"
import MantineTheme from "src/MantineTheme"
import { enableLegendStateReact } from "@legendapp/state/react"
import GeistTheme from "src/themes/GeistTheme"
import JSONfn from "json-fn"

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
  const theme = useMantineTheme()

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={MantineTheme}>
      {/* <ModalsProvider> */}
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
      {/* </ModalsProvider> */}
    </MantineProvider>
  )
}

export default withBlitz(MyApp)
