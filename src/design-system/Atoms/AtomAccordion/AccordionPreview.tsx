import { Accordion } from "@mantine/core"

const AccordionPreview = () => {
  const items = [
    {
      value: "customization",
      label: "Customization",
      panel: `Colors, fonts, shadows and many other parts are customizable to fit your design
    needs`,
    },
    {
      value: "flexibility",
      label: "Flexibility",
      panel: `Configure components appearance and behavior with vast amount of settings or
      overwrite any part of component styles`,
    },
    {
      value: "focus-ring",
      label: "No annoying focus ring",
      panel: `With new :focus-visible pseudo-class focus ring appears only when user navigates
      with keyboard`,
    },
  ]
  return (
    <Accordion defaultValue="customization">
      {items.map((item) => (
        <Accordion.Item value={item.value} key={item.value}>
          <Accordion.Control>{item.label}</Accordion.Control>
          <Accordion.Panel>{item.panel}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default AccordionPreview
