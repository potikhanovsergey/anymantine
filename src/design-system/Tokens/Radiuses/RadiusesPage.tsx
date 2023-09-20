import { useMantineTheme, Group, Text } from "@mantine/core"
import RadiusItem from "./RadiusItem"
import PageTitle from "src/design-system/layout/PageTitle"
import { useMemo } from "react"
import { radiusItemSize } from "./RadiusItem.styles"
import getDefaultProps from "src/helpers/getDefaultProps"

const canHaveRadius = [
  "Button",
  "ActionIcon",
  "Popover",
  "TextInput",
  "Checkbox",
  "Textarea",
  "Badge",
  "Select",
  "Skeleton",
  "Tooltip",
  "Paper",
  "Avatar",
  "Chip",
  "Switch",
  "Accordion",
  "Radio",
]

const Radiuses = () => {
  const theme = useMantineTheme()
  const useCases = useMemo(() => {
    const radiusCases: { [key: string]: string[] } = {
      xs: [],
      sm: [],
      md: [],
      lg: [],
      xl: [],
    }

    for (let i = 0; i < canHaveRadius.length; i++) {
      const componentName = canHaveRadius[i]
      const defaultProps = getDefaultProps(componentName, theme)
      const defaultRadius = defaultProps?.radius

      if (Object.keys(radiusCases).includes(defaultRadius) && typeof defaultRadius !== "number") {
        radiusCases[defaultRadius].push(componentName)
      } else if (canHaveRadius.includes(componentName)) {
        radiusCases[theme.defaultRadius].push(componentName)
      }
    }

    return radiusCases
  }, [theme])

  return (
    <Group gap={64} align="flex-start">
      {Object.keys(theme.radius).map((radius) => (
        <RadiusItem useCases={useCases[radius]} key={radius} radius={radius} title={radius} />
      ))}
    </Group>
  )
}

const RadiusesPage = () => {
  const theme = useMantineTheme()
  return (
    <>
      <PageTitle>Radiuses</PageTitle>
      <Text maw={700} mb="sm">
        Mantine provides <strong>theme.radius</strong> object to store different values for the
        border-radius property of elements. Typically, there are five radiuses: extra-small, small,
        medium, large and extra-large.
      </Text>
      <Text maw={700} mb="sm">
        Below you can see how elements with size of {radiusItemSize}px would look like with current
        theme radiuses. The default radius for most elements in current theme is{" "}
        <strong>{theme.defaultRadius}</strong> and its box is colored.
      </Text>
      <Text maw={700} mb="xl">
        The same border-radius value looks different on elements of different size. That&apos;s why
        it&apos;s better not to use the same radius for all the elements on the page. Below the
        boxes, you&apos;ll see which elements use which radius{" "}
        <strong>by default in this theme</strong>. Click the link to see the preview.
      </Text>
      <Radiuses />
    </>
  )
}

export default RadiusesPage
