import { Tabs as MantineTabs, Button, Title, Text, Box, Group, Stack } from "@mantine/core"
import { modals } from "@mantine/modals"

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
    <MantineTabs.Panel value="molecules" mt="md">
      <Stack>
        <Box>
          <Title order={2} mb="sm">
            Модальное окно
          </Title>
          <Button variant="filled" onClick={openModal}>
            Вызвать
          </Button>
        </Box>
      </Stack>
    </MantineTabs.Panel>
  )
}

export default ViewTabsMolecules
