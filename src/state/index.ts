import { computed, observable } from "@legendapp/state"
import { themes } from "src/themes"

export const appDesignThemeSlug = observable("marshmallow" as keyof typeof themes)

export const appDesignTheme = computed(() => themes[appDesignThemeSlug.get()])
