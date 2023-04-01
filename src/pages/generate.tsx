import { BlitzPage } from "@blitzjs/next"
import { Box, Button, Container, Title, useMantineTheme } from "@mantine/core"
import { Prism } from "@mantine/prism"
import Layout from "src/core/layouts/Layout"

import beautify from "js-beautify"
import BubbleTheme from "src/themes/Bubble"

// const themeData = {
//   components: {
//     Button: {
//       defaultProps: {
//         loaderPosition: "primary",
//         variant: "primary",
//       },
//       styles: {
//         root: {
//           transition:
//         },
//       },
//     },
//   },
// }

let inner = ""

const template = `import {
  MantineThemeOverride
} from "@mantine/core"

const bubbleTheme: MantineThemeOverride = {${inner}}

export default bubbleTheme
`.replace(/\\n/g, "\n")

const string = beautify(template)

const GenerateFilePage: BlitzPage = () => {
  const theme = useMantineTheme()

  const download = (filename: string, text: string) => {
    var element = document.createElement("a")
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))
    element.setAttribute("download", filename)

    element.style.display = "none"
    document.body.appendChild(element)

    element.click()

    document.body.removeChild(element)
  }

  const generateFile = () => {
    download("theme.ts", template)
  }

  return (
    <Layout>
      <Container pt="xl" size="xl">
        <Title order={1} mb="xl">
          Generate file
        </Title>
        <Box mb="md">
          <Button onClick={generateFile}>Generate and download</Button>
        </Box>

        <Prism mah={360} h={360} language="typescript">
          {string}
        </Prism>
      </Container>
    </Layout>
  )
}

export default GenerateFilePage
