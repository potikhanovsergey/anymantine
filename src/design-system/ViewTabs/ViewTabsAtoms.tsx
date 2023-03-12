import { Tabs as MantineTabs, Button, Stack, useMantineTheme, Group } from "@mantine/core"
import React from "react"
import ButtonConfigurator from "../Configurator/configurators/button"
import ItemPreview from "../ItemPreview"

const ViewTabsAtoms = () => {
  return (
    <MantineTabs.Panel value="atoms" mb="md">
      <Stack>
        <ItemPreview configurator={ButtonConfigurator} title="Кнопки">
          <Group>
            <Button>Пример кнопки</Button>
            <Button variant="outline">Пример кнопки</Button>
            <Button variant="shadow">Пример с тенью</Button>
            <Button variant="shadow" color="red">
              Пример с тенью
            </Button>
          </Group>
        </ItemPreview>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsAtoms
