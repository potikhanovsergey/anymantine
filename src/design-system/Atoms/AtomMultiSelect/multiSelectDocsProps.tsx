import { MultiSelect, Text } from "@mantine/core"
import { useState } from "react"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { multiSelectDataMock } from "./mocks"

const dropdownHeightData = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`)

const multiSelectDocsProps: Omit<ComponentDocsProps, "preview"> = {
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
          nothingFoundMessage="No options"
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
          nothingFoundMessage="No options"
          maxDropdownHeight={280}
          data={dropdownHeightData}
        />
      ),
    },
  ],
}

export default multiSelectDocsProps
