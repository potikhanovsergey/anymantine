import { Box, Center } from "@mantine/core"
import { ReactNode } from "react"

export const CardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Center w="100%" maw="100%">
      <Box maw={360} w="100%">
        {children}
      </Box>
    </Center>
  )
}
