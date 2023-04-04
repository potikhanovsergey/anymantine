import { computed, observable } from "@legendapp/state"
import { MantineThemeOverride } from "@mantine/core"
import { Theme } from "src/themes"

export const DesignSystem = observable(
  undefined as { theme: MantineThemeOverride; label: string; font: Theme["font"] } | undefined
)

export const DesignTheme = computed(() => DesignSystem.theme.get())
