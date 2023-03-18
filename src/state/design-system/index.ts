import { observable } from "@legendapp/state"
import { MantineThemeOverride } from "@mantine/core"

export const configurableAtom = observable(null as string | null)

export const DesignTheme = observable(undefined as MantineThemeOverride | undefined)
