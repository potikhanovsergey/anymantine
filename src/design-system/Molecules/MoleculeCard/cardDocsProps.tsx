import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import GalleryCard from "./GalleryCard"
import ImageTitleDescriptionCard from "./ImageTitleDescriptionCard"
import SwitchesCard from "./SwitchesCard"
import UserCard from "./UserCard"
import { switchesCardMockData, userCardMockData } from "./mocks"
import TasksCard from "./TasksCard"
import { CardWrapper } from "src/design-system/Wrappers/CardWrapper"

export const cardComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Card",
  description: `Something about card molecule.`,
  examples: [
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <ImageTitleDescriptionCard />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <GalleryCard />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <SwitchesCard {...switchesCardMockData} />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <UserCard {...userCardMockData} />
        </CardWrapper>
      ),
    },
    {
      descriptive: false,
      children: (
        <CardWrapper>
          <TasksCard />
        </CardWrapper>
      ),
    },
  ],
}
