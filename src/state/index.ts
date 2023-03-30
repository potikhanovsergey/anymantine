import { computed, observable } from "@legendapp/state"
import { themes } from "src/themes"

export const appDesignThemeSlug = observable(Object.keys(themes)[0])

export const appDesignTheme = computed(() => themes[appDesignThemeSlug.get()])
