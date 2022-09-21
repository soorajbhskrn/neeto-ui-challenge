import React from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

const renderAvatarWithNameRoleAndImage = (name, { role, imageUrl }) => (
  <div className="flex flex-row items-center">
    <Avatar
      className="mr-2"
      user={{
        name,
        imageUrl,
      }}
    />
    <div>
      <Typography style="h4">{name}</Typography>
      <Typography style="body2">{role}</Typography>
    </div>
  </div>
);

const renderDropdownButton = setShowDeleteAlert => (
  <div>
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li> Edit </li>
      <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
    </Dropdown>
  </div>
);

export const buildContactColumnData = () => [
  {
    dataIndex: "name",
    key: "name",
    title: "NAME & ROLE",

    render: renderAvatarWithNameRoleAndImage,
  },
  {
    dataIndex: "email",
    key: "email",
    title: "EMAIL",
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "CREATED AT",

    render: createdAt => (
      <Typography style="body2">{createdAt.toDateString()}</Typography>
    ),
  },
  {
    dataIndex: "dropdown_menu",
    key: "dropdown_menu",
    title: "",

    render: renderDropdownButton,
  },
];
