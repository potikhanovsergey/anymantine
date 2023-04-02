import { Group, AccordionProps, Accordion, MantineTheme } from "@mantine/core"
import React from "react"
import { MantineDemo } from "src/design-system/Demo/types"
import getDefaultProps from "src/helpers/getDefaultProps"

const codeTemplate = (props: string) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion${props}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`

function Wrapper(props: AccordionProps) {
  return (
    <Group position="center">
      <Accordion {...props} w="100%">
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit your design needs
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of settings or overwrite
            any part of component styles
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when user navigates with
            keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Group>
  )
}

const getAccordionConfigurator = (theme: MantineTheme) => {
  const defaultProps = getDefaultProps("Accordion", theme)
  return {
    type: "configurator",
    component: Wrapper,
    codeTemplate,
    configurator: [
      {
        name: "variant",
        type: "select",
        data: [
          { label: "Default", value: "default" },
          { label: "Contained", value: "contained" },
          { label: "Filled", value: "filled" },
          { label: "Separated", value: "separated" },
        ],
        initialValue: defaultProps?.["variant"] || "default",
      },
      {
        name: "radius",
        type: "size",
        initialValue: defaultProps?.["radius"] || theme.defaultRadius,
      },
      {
        name: "chevronPosition",
        label: "Chevron position",
        type: "segmented",
        data: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
        initialValue: defaultProps?.["chevronPosition"] || "left",
      },
      {
        name: "disableChevronRotation",
        label: "Disable chevron rotation",
        type: "boolean",
        initialValue: false,
      },
    ],
  } as MantineDemo
}

export default getAccordionConfigurator
