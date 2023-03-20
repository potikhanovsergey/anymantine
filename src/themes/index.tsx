import Marshmallow, { marshmallowFont } from "./Marshmallow"
import Geist, { geistFont } from "./Geist"

export const tokens = [
  {
    slug: "colors",
    label: "Цвета",
  },
  {
    slug: "typography",
    label: "Типографика",
  },
  {
    slug: "radiuses-and-shadows",
    label: "Радиусы и тени",
  },
  {
    slug: "states",
    label: "Состояния",
  },
  {
    slug: "icons",
    label: "Иконки",
  },
]

export const atoms = [
  {
    slug: "button",
    label: "Кнопки",
  },
  {
    slug: "action-icon",
    label: "Кнопки-иконки",
  },
  {
    slug: "badge",
    label: "Теги",
  },
  {
    slug: "checkbox",
    label: "Чекбоксы",
  },
  {
    slug: "radio",
    label: "Радио-кнопки",
  },
  {
    slug: "switch",
    label: "Переключатели",
  },
  {
    slug: "select",
    label: "Выпадающее меню",
  },
  {
    slug: "text-input",
    label: "Инпуты",
  },
  {
    slug: "textarea",
    label: "Textareas",
  },
  {
    slug: "skeleton",
    label: "Скелетоны",
  },
  {
    slug: "tooltip",
    label: "Туллтипы",
  },
  {
    slug: "paper",
    label: "Карточка",
  },
]

export const usage = [
  {
    slug: "preview",
    label: "Превью",
  },
  {
    slug: "files",
    label: "Файлы",
  },
]

export const dsSubPages = [
  ...atoms.map((item) => ({ ...item, type: "atoms" })),
  ...tokens.map((item) => ({ ...item, type: "tokens" })),
  ...usage.map((item) => ({ ...item, type: "usage" })),
]

export type DesignSystemSubPage = (typeof dsSubPages)[number]

export const themes = {
  marshmallow: { theme: Marshmallow, font: marshmallowFont },
  geist: { theme: Geist, font: geistFont },
}

const designSystems = [
  {
    slug: "marshmallow",
    title: "Marshmallow",
    caption: "Marshadow",
    colors: ["dark", "gray", "red", "violet"],
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/14/94/70/360_F_114947051_ZedDWoCQXNK9CioGMIYLrHr8M5Xs7gRW.jpg",
  },
  {
    slug: "geist",
    title: "Geist",
    caption: "Vercel",
    colors: ["red", "dark"],
    imageUrl:
      "https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1671111035%2Fgeist%2Fgeist-illustration-light.png&w=1920&q=100",
  },
]

export type DesignSystem = (typeof designSystems)[number]

export const themeCards = designSystems.map((theme) => ({
  slug: theme.slug,
  title: theme.title,
  caption: theme.caption,
  imageUrl: theme.imageUrl,
}))

export default designSystems
