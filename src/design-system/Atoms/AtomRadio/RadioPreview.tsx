import { Radio, Group } from "@mantine/core"

const RadioPreview = () => {
  return (
    <Radio.Group
      name="favoriteFruit"
      label="Select your favorite fruit"
      description="This is anonymous"
      withAsterisk
      defaultValue="kiwi"
    >
      <Group mt="xs">
        <Radio value="kiwi" label="Kiwi" />
        <Radio value="mango" label="Mango" />
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
      </Group>
    </Radio.Group>
  )
}

export default RadioPreview
