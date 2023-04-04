import { Group, MultiSelect } from "@mantine/core"
import { multiSelectDataMock } from "."

const MultiSelectPreview = () => {
  return (
    <Group>
      <MultiSelect
        data={multiSelectDataMock}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </Group>
  )
}

export default MultiSelectPreview
