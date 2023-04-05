import { computed, observable } from "@legendapp/state"
import { Theme, themes } from "public/themes"

export const appDesignThemeSlug = observable(Object.keys(themes)[0])

export const appDesignTheme = computed(() => themes[appDesignThemeSlug.get()] as Theme)
