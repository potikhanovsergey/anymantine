import { Text, MultiSelect, useMantineTheme } from "@mantine/core"
import { useState } from "react"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import getMultiSelectConfigurator from "src/design-system/Configurator/configurators/multi-select"
import MultiSelectPreview from "./MultiSelectPreview"

export const multiSelectDataMock = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
]

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
    <MultiSelect
      label="Creatable Multi Select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      getCreateLabel={getCreateLabel}
      onCreate={onCreate}
    />
  )
}

const multiSelectComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Multi Select",
  description: `Multi Select component allows user to pick any amount of option from the given list of options `,
  mantineLink: "https://mantine.dev/core/multi-select",
  examples: [
    {
      title: "Searchable",
      description: (
        <Text>
          You can make multi-select searchable when there&apos;s to many options to pick from. Set
          <strong> searchable</strong> prop to true to enable search in multi-select and{" "}
          <strong>nothingFound</strong> prop to any ReactNode to provide label that will be shown
          when no options were found.
        </Text>
      ),
      children: (
        <MultiSelect
          label="Your favorite framework"
          placeholder="Pick one"
          searchable
          nothingFound="No options"
          data={multiSelectDataMock}
        />
      ),
    },
    {
      title: "Clearable",
      description: (
        <Text>
          Set <strong>clearable</strong> prop to true to enable clearing select value. When prop is
          true and value is selected clear button will replace chevron in right section.
        </Text>
      ),
      children: (
        <MultiSelect
          label="Your favorite framework"
          placeholder="Pick one"
          clearable
          data={multiSelectDataMock}
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
        <MultiSelect
          label="Your favorite Rick and Morty character"
          placeholder="Pick one"
          data={[
            { value: "rick", label: "Rick", group: "Used to be a pickle" },
            { value: "morty", label: "Morty", group: "Never was a pickle" },
            { value: "beth", label: "Beth", group: "Never was a pickle" },
            { value: "summer", label: "Summer", group: "Never was a pickle" },
          ]}
        />
      ),
    },
    {
      title: "Disabled items",
      description: (
        <Text>
          You can disable items in multi-select by setting <strong>disabled</strong> value to true
          inside data array objects. Use it when you want to show that the item exists, but is not
          available at the moment.
        </Text>
      ),
      children: (
        <MultiSelect
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
      title: "Creatable items",
      description: (
        <Text>
          Set <strong>creatable</strong> and <strong>getCreateLabel</strong> props to enable
          creating new select item. Note that you will need to handle data state to manage item
          creation correctly.
        </Text>
      ),
      children: <CreatableSelect />,
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
        <MultiSelect
          label="What item is the best?"
          placeholder="Pick one"
          searchable
          nothingFound="No options"
          maxDropdownHeight={280}
          data={dropdownHeightData}
        />
      ),
    },
  ],
}

const AtomMultiSelect = () => {
  const theme = useMantineTheme()
  const multiSelectConfigurator = getMultiSelectConfigurator(theme)
  return (
    <ComponentDocs
      {...multiSelectComponentDocsProps}
      preview={{
        configurator: multiSelectConfigurator,
        children: <MultiSelectPreview />,
      }}
    />
  )
}

export default AtomMultiSelect
