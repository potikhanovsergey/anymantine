import { Center, Box } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import GalleryCard from "./GalleryCard"
import ImageTitleDescriptionCard from "./ImageTitleDescriptionCard"
import SwitchesCard from "./SwitchesCard"
import UserCard from "./UserCard"
import { switchesCardMockData, userCardMockData } from "./mocks"

export const cardComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
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
    {
      title: "User card",
      description: "User card description",
      children: (
        <Center>
          <Box maw={360} w="100%">
            <UserCard {...userCardMockData} />
          </Box>
        </Center>
      ),
    },
  ],
}
