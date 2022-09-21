import React from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

const renderAvatarWithNameRoleAndImage = (
  name,
  { firstName, lastName, role, imageUrl }
) => (
  <div className="flex flex-row items-center">
    <Avatar
      className="mr-2"
      user={{
        name: `${firstName} ${lastName}`,
        imageUrl,
      }}
    />
    <div>
      <Typography style="h4">{`${firstName} ${lastName}`}</Typography>
      <Typography style="body2">{role}</Typography>
    </div>
  </div>
);

const renderDropdownButton = ({
  changeDeleteAlert,
  changeSelectedId,
  contactId,
}) => (
  <div>
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li> Edit </li>
      <li
        onClick={() => {
          changeDeleteAlert(true);
          changeSelectedId(contactId);
        }}
      >
        Delete
      </li>
    </Dropdown>
  </div>
);

export const buildContactColumnData = (
  setShowDeleteAlert,
  setSelectedContactId
) => [
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

    render: (item, { id }) =>
      renderDropdownButton({
        changeDeleteAlert: setShowDeleteAlert,
        changeSelectedId: setSelectedContactId,
        contactId: id,
      }),
  },
];
