import { ActionIcon, Box, Group, Tooltip, Text, Mark } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import TooltipConfigurator from "src/design-system/Configurator/configurators/tooltip"
import ItemPreview from "src/design-system/ItemPreview"

const AtomTooltips = () => {
  return (
    <ItemPreview
      configurator={TooltipConfigurator}
      title="Подсказки"
      mantineLink="https://mantine.dev/core/tooltip"
    >
      <Group>
        <Tooltip label="Make love">
          <ActionIcon>
            <IconHeart size="75%" stroke={1} />
          </ActionIcon>
        </Tooltip>
        <Box>
          <Text>
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
            Продолжил, океана, парадигматическая{" "}
            <Tooltip inline label="Подсказка для ipsum">
              <Mark>ipsum</Mark>
            </Tooltip>
            , безорфографичный своих заглавных свое прямо взобравшись всеми себя всемогущая
            напоивший. Семантика своих лучше его языкового океана.
          </Text>
        </Box>
      </Group>
    </ItemPreview>
  )
}

export default AtomTooltips