import { Tabs, Button, Title, Text, Box, Group, Stack } from "@mantine/core"
import { modals } from "@mantine/modals"
import PanelStack from "../PanelStack"

const ViewTabsMolecules = () => {
  const openModal = () =>
    modals.openContextModal({
      modal: "test",
      title: "Модальное окно",
      innerProps: {
        modalBody: "Тестовое модальное окно, выполненное в теме Geist",
      },
    })
  return (
    <Tabs.Panel value="molecules" mt="md">
      <PanelStack>
        <Box>
          <Title order={2} mb="sm">
            Модальное окно
          </Title>
          <Button variant="filled" onClick={openModal}>
            Вызвать
          </Button>
        </Box>
      </PanelStack>
    </Tabs.Panel>
  )
}

export default ViewTabsMolecules
