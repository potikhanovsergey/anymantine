import { computed, observable } from "@legendapp/state"
import { MantineThemeOverride } from "@mantine/core"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"

export const DesignSystem = observable(
  undefined as
    | { theme: MantineThemeOverride; label: string; font: NextFontWithVariable }
    | undefined
)

export const DesignTheme = computed(() => DesignSystem.theme.get())
