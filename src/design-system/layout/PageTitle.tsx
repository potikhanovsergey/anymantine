import { Box, Group, Title, TitleProps, Tooltip } from "@mantine/core"
import Link from "next/link"
import Mantine from "src/core/components/icons/Mantine"

export interface PageTitleProps extends Omit<TitleProps, "order"> {
  mantineLink?: string
}

const PageTitle = ({ mantineLink, ...props }: PageTitleProps) => {
  if (mantineLink) {
    return (
      <Group gap="xs" mb="xl">
        <Title {...props} order={1} />
        <Tooltip label={mantineLink}>
          <Box component={Link} lh={0} href={mantineLink} target="_blank">
            <Mantine />
          </Box>
        </Tooltip>
      </Group>
    )
  }
  return <Title mb="xl" {...props} order={1} />
}

export default PageTitle
