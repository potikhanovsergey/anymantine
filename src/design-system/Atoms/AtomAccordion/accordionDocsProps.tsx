import { Accordion, rem, Group, Stack, Text } from "@mantine/core"
import { IconPhoto, IconPrinter, IconCameraSelfie } from "@tabler/icons-react"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"

const accordionDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Accordion",
  description: `An accordion is a type of menu that displays a list of headers stacked on top of one another.
  When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.`,
  mantineLink: "https://mantine.dev/core/accordion",
  examples: [
    {
      title: "With icons",
      description: `You can put an icon in the left section of controls in accordion to make the idea of each
      control more clear to user.`,
      children: (
        <Accordion variant="contained">
          <Accordion.Item value="photos">
            <Accordion.Control icon={<IconPhoto size={rem(20)} />}>Recent photos</Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="print">
            <Accordion.Control icon={<IconPrinter size={rem(20)} />}>
              Print photos
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="camera">
            <Accordion.Control icon={<IconCameraSelfie size={rem(20)} />}>
              Camera settings
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Default opened items",
      description: `You can set the default opened item or items in the so chosen items will be opened by default.
      If you want to set a few items default opened you need to pass accordion component prop multiple.`,
      children: (
        <Group justify="center" wrap="nowrap" align="flex-start">
          <Stack>
            <Text mb="sm" color="dimmed">
              One default opened item
            </Text>
            <Accordion defaultValue="item-2">
              <Accordion.Item value="item-1">
                <Accordion.Control>control-1</Accordion.Control>
                <Accordion.Panel>panel-1</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Control>control-2</Accordion.Control>
                <Accordion.Panel>panel-2</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
          <Stack>
            <Text mb="sm" color="dimmed">
              A few default opened items
            </Text>
            <Accordion defaultValue={["item-1", "item-2"]} multiple>
              <Accordion.Item value="item-1">
                <Accordion.Control>control-1</Accordion.Control>
                <Accordion.Panel>panel-1</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Control>control-2</Accordion.Control>
                <Accordion.Panel>panel-2</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </Group>
      ),
    },
    {
      title: "Disabled items",
      description: `An accordion item in a disabled state shows that an item exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.`,
      children: (
        <Accordion>
          {[
            {
              value: "customization",
              label: "Customization",
              panel: `Colors, fonts, shadows and many other parts are customizable to fit your design
    needs`,
            },
            {
              value: "flexibility",
              label: "Flexibility",
              disabled: true,
              panel: `Configure components appearance and behavior with vast amount of settings or
      overwrite any part of component styles`,
            },
            {
              value: "focus-ring",
              label: "No annoying focus ring",
              panel: `With new :focus-visible pseudo-class focus ring appears only when user navigates
      with keyboard`,
            },
          ].map((item) => (
            <Accordion.Item value={item.value} key={item.value}>
              <Accordion.Control disabled={item.disabled}>{item.label}</Accordion.Control>
              <Accordion.Panel>{item.panel}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      ),
    },
  ],
}

export default accordionDocsProps
