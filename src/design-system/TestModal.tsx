import { ContextModalProps, ModalsProvider } from "@mantine/modals"
import { Text, Button } from "@mantine/core"

const TestModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
)

export default TestModal
