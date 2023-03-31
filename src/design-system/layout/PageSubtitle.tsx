import { Title, TitleProps } from "@mantine/core"

const PageSubtitle = (props: Omit<TitleProps, "order">) => {
  return <Title mb="sm" {...props} order={2} />
}

export default PageSubtitle
