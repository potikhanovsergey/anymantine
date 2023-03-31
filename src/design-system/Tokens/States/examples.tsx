import { ExampleProps } from "src/design-system/Examples/Example"

const examples: ExampleProps[] = [
  {
    title: "Default",
    description: "This is the default state of a component or item when not interacted with.",
    children: Object.keys(buttonStyles?.variants!)?.map((variant) => (
      <Button key={variant} variant={variant}>
        Action
      </Button>
    )),
  },
]

export default examples
