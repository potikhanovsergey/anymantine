import { Center, Box } from "@mantine/core"
import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import GalleryCard from "./GalleryCard"
import ImageTitleDescriptionCard from "./ImageTitleDescriptionCard"
import SwitchesCard from "./SwitchesCard"
import UserCard from "./UserCard"
import { switchesCardMockData, userCardMockData } from "./mocks"
import TasksCard from "./TasksCard"
import { ReactNode } from "react"
import ActionsGridCard from "./ActionsGridCard"

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Center>
      <Box maw={360} w="100%">
        {children}
      </Box>
    </Center>
  )
}

export const cardComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Card",
  description: `Something about card molecule.`,
  examples: [
    {
      title: "Card",
      description: "Card description",
      children: (
        <Wrapper>
          <ImageTitleDescriptionCard />
        </Wrapper>
      ),
    },
    {
      title: "Card with actiosn grid",
      description: "Card with actions grid description",
      children: (
        <Wrapper>
          <ActionsGridCard />
        </Wrapper>
      ),
    },
    {
      title: "Gallery card",
      description: "Gallery card description",
      children: (
        <Wrapper>
          <GalleryCard />
        </Wrapper>
      ),
    },
    {
      title: "Switches card",
      description: "Switches card description",
      children: (
        <Wrapper>
          <SwitchesCard {...switchesCardMockData} />
        </Wrapper>
      ),
    },
    {
      title: "User card",
      description: "User card description",
      children: (
        <Wrapper>
          <UserCard {...userCardMockData} />
        </Wrapper>
      ),
    },
    {
      title: "Tasks card",
      description: "Tasks card description",
      children: (
        <Wrapper>
          <TasksCard />
        </Wrapper>
      ),
    },
  ],
}
