import { computed, observable } from "@legendapp/state"
import { MantineThemeOverride } from "@mantine/core"

export const configurableAtom = observable(null as string | null)

export const DesignSystem = observable(
  undefined as { theme: MantineThemeOverride; label: string } | undefined
)

export const DesignTheme = computed(() => DesignSystem.theme.get())
