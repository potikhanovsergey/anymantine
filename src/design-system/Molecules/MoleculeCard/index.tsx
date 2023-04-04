import { Box, Center } from "@mantine/core"
import ComponentDocs, { ComponentDocsProps } from "src/design-system/ComponentDocs"
import ImageTitleDescriptionCard from "./ImageTitleDescriptionCard"
import GalleryCard from "./GalleryCard"
import SwitchesCard, { switchesCardMockData } from "./SwitchesCard"

const cardComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Card",
  description: `Something about card molecule.`,
  examples: [
    {
      title: "Card",
      description: "Card description",
      children: (
        <Center>
          <Box maw={360}>
            <ImageTitleDescriptionCard />
          </Box>
        </Center>
      ),
    },
    {
      title: "Gallery card",
      description: "Gallery card description",
      children: (
        <Center>
          <Box maw={360}>
            <GalleryCard />
          </Box>
        </Center>
      ),
    },
    {
      title: "Switches card",
      description: "Switches card description",
      children: (
        <Center>
          <Box maw={360}>
            <SwitchesCard {...switchesCardMockData} />
          </Box>
        </Center>
      ),
    },
  ],
}

const MoleculeCard = () => {
  return <ComponentDocs {...cardComponentDocsProps} />
}

export default MoleculeCard
