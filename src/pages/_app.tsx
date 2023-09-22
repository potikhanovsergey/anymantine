import "@mantine/core/styles.css"
import "@mantine/code-highlight/styles.css"

import { ErrorBoundary, AppProps } from "@blitzjs/next"
import React from "react"
import { withBlitz } from "src/blitz-client"
import { MantineProvider } from "@mantine/core"
import { enableLegendStateReact, useSelector } from "@legendapp/state/react"
import { appDesignTheme } from "src/state"
import { Analytics } from "@vercel/analytics/react"
import ThemeRouteListener from "src/core/layouts/ThemeRouteListener"
import RootErrorFallback from "src/core/layouts/RootErrorFallback"

enableLegendStateReact()

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const { theme, colorScheme } = useSelector(appDesignTheme)

  return (
    <MantineProvider forceColorScheme={colorScheme} theme={theme}>
      <ThemeRouteListener />
      <Analytics />
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </MantineProvider>
  )
}

export default withBlitz(MyApp)
