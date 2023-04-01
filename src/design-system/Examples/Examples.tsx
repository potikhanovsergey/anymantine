import { Stack } from "@mantine/core"
import Example, { ExampleProps } from "./Example"

interface ExamplesProps {
  examples: ExampleProps[]
}

const Examples = ({ examples }: ExamplesProps) => {
  return (
    <Stack spacing={64}>
      {examples.map((example) => (
        <Example key={example.title} {...example} />
      ))}
    </Stack>
  )
}

export default Examples
