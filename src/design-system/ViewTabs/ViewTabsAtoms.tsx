import { Tabs } from "@mantine/core"
import React from "react"
import { Computed, observer, useObservable } from "@legendapp/state/react"
import PanelStack from "../PanelStack"
import AtomButtons from "../Atoms/AtomButtons"
import AtomActionIcons from "../Atoms/AtomActionIcons"
import AtomTextInputs from "../Atoms/AtomTextInputs"
import AtomSelects from "../Atoms/AtomSelects"

const ViewTabsAtoms = () => {
  const configurableAtom = useObservable(null as string | null)

  const toggleConfigurable = (title: string) => {
    configurableAtom.set((prev) => (prev === title ? null : title))
  }

  return (
    <Tabs.Panel value="atoms" mb="md">
      <PanelStack>
        <Computed>
          <AtomButtons
            opened={configurableAtom.get() === "buttons"}
            onToggleConfigurator={() => toggleConfigurable("buttons")}
          />
          <AtomActionIcons
            opened={configurableAtom.get() === "action-icons"}
            onToggleConfigurator={() => toggleConfigurable("action-icons")}
          />
          <AtomTextInputs
            opened={configurableAtom.get() === "text-inputs"}
            onToggleConfigurator={() => toggleConfigurable("text-inputs")}
          />
          <AtomSelects
            opened={configurableAtom.get() === "selects"}
            onToggleConfigurator={() => toggleConfigurable("selects")}
          />
        </Computed>
      </PanelStack>
    </Tabs.Panel>
  )
}

export default ViewTabsAtoms
