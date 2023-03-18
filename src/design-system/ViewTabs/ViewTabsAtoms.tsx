import { Tabs } from "@mantine/core"
import React from "react"
import { Computed, observer, useObservable } from "@legendapp/state/react"
import PanelStack from "../PanelStack"
import AtomActionIcons from "../Atoms/AtomActionIcons"
import AtomBadges from "../Atoms/AtomBadges"
import AtomButtons from "../Atoms/AtomButtons"
import AtomCheckboxes from "../Atoms/AtomCheckboxes"
import AtomRadios from "../Atoms/AtomRadios"
import AtomSelects from "../Atoms/AtomSelects"
import AtomSkeletons from "../Atoms/AtomSkeletons"
import AtomSwitches from "../Atoms/AtomSwitches"
import AtomTextInputs from "../Atoms/AtomTextInputs"
import AtomTextareas from "../Atoms/AtomTextareas"
import AtomTooltips from "../Atoms/AtomTooltips"

const ViewTabsAtoms = () => {
  return (
    <Tabs.Panel value="atoms">
      <PanelStack>
        <AtomButtons />
        <AtomActionIcons />
        <AtomTextInputs />
        <AtomTextareas />
        <AtomSelects />
        <AtomSwitches />
        <AtomCheckboxes />
        <AtomRadios />
        <AtomBadges />
        <AtomTooltips />
        <AtomSkeletons />
      </PanelStack>
    </Tabs.Panel>
  )
}

export default ViewTabsAtoms
