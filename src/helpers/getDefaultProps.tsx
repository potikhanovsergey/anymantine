import { MantineTheme } from "@mantine/core"

const getDefaultProps = (
  componentName: string,
  theme: MantineTheme
): Record<string, any> | undefined => {
  const component = theme.components?.[componentName]

  if (component) {
    return typeof component?.defaultProps === "function"
      ? component.defaultProps(theme)
      : component.defaultProps
  }
  return undefined
}

export default getDefaultProps
