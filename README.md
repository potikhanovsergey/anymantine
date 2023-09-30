## Описание

На данном сайте можно выбрать любую понравившуются дизайн-систему для React на основе open-source библиотеки Mantine для использования ее у себя в проекте.

Выбор темы:

<img width="1467" alt="anymantine" src="https://github.com/potikhanovsergey/anymantine/assets/94698814/d8b054ca-67ac-49b1-aaa0-392961533258">

Примеры готовых компонентов:

<img width="1469" alt="анимантин" src="https://github.com/potikhanovsergey/anymantine/assets/94698814/33d6b3c1-5ae4-4bc8-8980-9ad28e1afbcb">

## Короткое описание использования

1) Ваш проект должен быть написан на React.js
2) Чтобы начать использовать темы, нужно сперва установить Mantine библиотеку.
3) Далее нужно скачать файл с темой и вставить его в свой проект
4) Добавьте использование темы в провайдер и наслаждайтесь )
 
```import { MantineProvider } from "@mantine/core";
import bubbleTheme from "[path-to-downloaded-file]/marshmallowTheme";

const ThemeUsageSnippet = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={bubbleTheme}>
      {/* your app here */}
    </MantineProvider>
  )
}

