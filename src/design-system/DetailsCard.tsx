import { Avatar, Box, Button, Group, HoverCard, Stack, Text, Title } from "@mantine/core"
import ProfileHoverCard from "src/core/components/molecules/ProfileHoverCard"

const DetailsCard = () => {
  return (
    <Box>
      <Avatar.Group>
        <ProfileHoverCard
          caption="Разработчик"
          name="Дарья Семина"
          avatar="https://sun1-88.userapi.com/impg/dRYL9L_n-mBXXhKn3jRqF8qTaIvzXIozrtJKpQ/FZBi4MixyZ4.jpg?size=959x959&quality=96&sign=cde9cc003f41d86af4d520d23d8ebb45&type=album"
        />
        <ProfileHoverCard
          caption="Дизайнер"
          name="Сергей Потиханов"
          avatar="https://sun9-19.userapi.com/impg/LAms2qN4MoG65Ch1oTFKsC3FTk9iTerjFfwjfg/VROjPPSMvGo.jpg?size=1820x1296&quality=95&sign=a89a11e560da036feb18b270d712d059&type=album"
        />
      </Avatar.Group>
      <Title order={1}>Geist by Vercel</Title>
      <Text mb="xs">
        Vercel — это платформа для разработчиков интерфейсов, обеспечивающая скорость и надежность
        разработки.
      </Text>
      <Text>
        Geist — это дизайн-система, которая используется в процессе разработки продуктов платформы.
        Получите Mantine тему, чтобы использовать все компоненты библиотеки, выполненные в стиле
        Geist. В пакет входят дополнительные файлы и готовые секции.
      </Text>
      <Button fullWidth mt="lg">
        ₽1450 Приобрести
      </Button>
    </Box>
  )
}

export default DetailsCard
