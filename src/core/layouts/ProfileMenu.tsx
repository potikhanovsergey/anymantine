import { Avatar, Menu, UnstyledButton } from "@mantine/core"

const ProfileMenu = () => {
  return (
    <Menu width={160} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Avatar
            src="https://archives.bulbagarden.net/media/upload/thumb/c/c6/Marshadow_M20.png/250px-Marshadow_M20.png"
            size={36}
            radius="sm"
            styles={{
              root: { border: "1px solid black" },
              placeholder: { background: "white", border: "1px solid black" },
            }}
          >
            👾
          </Avatar>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>My profile</Menu.Item>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
        <Menu.Item>Item 4</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
