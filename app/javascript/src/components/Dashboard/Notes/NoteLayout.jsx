import React from "react";

import { useUserState } from "contexts/user";

import { NOTES_CREATED } from "./constants";
import NoteItem from "./NoteItem/NoteItem";

const NoteLayout = () => {
  const { user } = useUserState();
  return (
    <div>
      {NOTES_CREATED.map(({ id, title, description, updatedAt }) => (
        <NoteItem
          description={description}
          key={id}
          title={title}
          updatedAt={updatedAt}
          userName={`${user.first_name} ${user.last_name}`}
        />
      ))}
    </div>
  );
};

export default NoteLayout;
