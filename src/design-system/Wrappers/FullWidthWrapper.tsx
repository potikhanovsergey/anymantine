import { Center, Box } from "@mantine/core"
import { ReactNode } from "react"

export const FullWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Center w="100%" maw="100%">
      <Box w="100%">{children}</Box>
    </Center>
  )
}
