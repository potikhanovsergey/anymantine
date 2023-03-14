import { Tabs, Button, Stack, useMantineTheme, Group } from "@mantine/core"
import React from "react"
import ButtonConfigurator from "../Configurator/configurators/button"
import ItemPreview from "../ItemPreview"
import { useComputed, useObservable, useObserve } from "@legendapp/state/react"

const ViewTabsAtoms = () => {
  const configurableAtom = useObservable(null as string | null)

  const toggleConfigurable = (title: string) => {
    configurableAtom.set((prev) => (prev === title ? null : title))
  }

  const buttonsOpened = useComputed(() => configurableAtom.get() === "Кнопки")

  return (
    <Tabs.Panel value="atoms" mb="md">
      <Stack>
        <ItemPreview
          opened={buttonsOpened}
          onToggleConfigurator={() => toggleConfigurable("Кнопки")}
          configurator={ButtonConfigurator}
          title="Кнопки"
        >
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
    </Tabs.Panel>
  )
}

export default ViewTabsAtoms
