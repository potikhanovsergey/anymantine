import { useSelector } from "@legendapp/state/react"
import { MantineProvider } from "@mantine/core"
import { ReactNode } from "react"
import { DesignSystem } from "src/state/design-system"

interface DesignSystemProviderProps {
  children: ReactNode
}

const DesignSystemProvider = ({ children }: DesignSystemProviderProps) => {
  const designSystem = useSelector(DesignSystem)
  return (
    <MantineProvider theme={designSystem.theme}>
      <div className={designSystem.font?.nextFont?.variable}>{children}</div>
    </MantineProvider>
  )
}

export default DesignSystemProvider
