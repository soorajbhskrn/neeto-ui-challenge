import React, { useState } from "react";

import { useUserState } from "contexts/user";

import { NOTES_CREATED } from "./constants";
import NoteItem from "./NoteItem/NoteItem";

const NoteLayout = () => {
  const [notes, setNotes] = useState(NOTES_CREATED);
  const { user } = useUserState();
  return (
    <div>
      {notes.map(({ id, title, description, updatedAt }) => (
        <NoteItem
          description={description}
          id={id}
          key={id}
          notes={notes}
          setNotes={setNotes}
          title={title}
          updatedAt={updatedAt}
          userName={`${user.first_name} ${user.last_name}`}
        />
      ))}
    </div>
  );
};

export default NoteLayout;
