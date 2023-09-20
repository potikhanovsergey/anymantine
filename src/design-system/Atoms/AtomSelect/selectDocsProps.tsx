import { Select, Text } from "@mantine/core"
import { useState } from "react"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

export const selectDataMock = ["Orange", "Banana", "Mango", "Apple", "Lemon", "Kiwi"]

const dropdownHeightData = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`)

const CreatableSelect = () => {
  const [data, setData] = useState([
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
  ])

  const onCreate = (query) => {
    const item = { value: query, label: query }
    setData((current) => [...current, item])
    return item
  }

  const getCreateLabel = (query) => `+ Create ${query}`

  return (
    <Select
      label="Creatable Select"
      data={data}
      placeholder="Select items"
      nothingFoundMessage="Nothing found"
      searchable
      creatable
      getCreateLabel={getCreateLabel}
      onCreate={onCreate}
    />
  )
}

const selectDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Select",
  description: `Select allow users to choose from a list of options in a limited space. The list of options can change based on the context.`,
  mantineLink: "https://mantine.dev/core/select",
  examples: [
    {
      title: "Searchable",
      description: (
        <Text>
          You can make select searchable when there&apos;s to many options to pick from. Set
          <strong> searchable</strong> prop to true to enable search in select and{" "}
          <strong>nothingFound</strong> prop to any ReactNode to provide label that will be shown
          when no options were found.
        </Text>
      ),
      children: (
        <Select
          label="Your favorite fruit"
          placeholder="Pick one"
          searchable
          nothingFoundMessage="No options"
          data={[
            ...selectDataMock,
            "Dragonfruit",
            "Pineapple",
            "Watermelon",
            "Grape",
            "Lime",
            "Tangelo",
          ]}
        />
      ),
    },
    {
      title: "Grouping items",
      description: (
        <Text>
          You can group related items in select by providing <strong>group</strong> string to
          objects inside data array.
        </Text>
      ),
      children: (
        <Select
          label="Your favorite library"
          placeholder="Pick one"
          data={[
            { group: "Frontend", items: ["React", "Angular"] },
            { group: "Backend", items: ["Express", "Django"] },
          ]}
        />
      ),
    },
    {
      title: "Disabled items",
      description: (
        <Text>
          You can disable items in select by setting <strong>disabled</strong> value to true inside
          data array objects. Use it when you want to show that the item exists, but is not
          available at the moment.
        </Text>
      ),
      children: (
        <Select
          label="Select with disabled items"
          placeholder="Select something"
          data={[
            { value: "react", label: "React", disabled: true },
            { value: "ng", label: "Angular", disabled: true },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
      ),
    },
    {
      title: "Dropdown height",
      description: (
        <Text>
          With <strong>maxDropdowHeight</strong> prop you can change the height of the dropdown. For
          example, you can increase it for selects with large data set. creation correctly.
        </Text>
      ),
      children: (
        <Select
          label="What item is the best?"
          placeholder="Pick one"
          searchable
          nothingFoundMessage="No options"
          maxDropdownHeight={280}
          data={dropdownHeightData}
        />
      ),
    },
  ],
}

export default selectDocsProps
