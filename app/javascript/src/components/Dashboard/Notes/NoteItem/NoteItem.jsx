import React, { useState } from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Button, Avatar, Tooltip, Typography, Dropdown, Toastr } from "neetoui";
import PropTypes from "prop-types";

import DeleteAlert from "../DeleteAlert";
import { createdDateTillNow, formatDateWithDayAndTime } from "../utils";

const NoteItem = ({
  id,
  title,
  description,
  createdAt,
  userName,
  notes,
  setNotes,
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setNotes(notes.filter(note => note.id !== id));
    setOpen(false);
    Toastr.success("Note deleted successfully");
  };
  return (
    <div className="mb-4 w-full border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-between">
        <h2>{title}</h2>
        <Dropdown buttonSize="large" buttonStyle="text" icon={MenuVertical}>
          <li>Edit</li>
          <li onClick={() => setOpen(true)}>Delete</li>
        </Dropdown>
      </div>
      <p className="text-base">{description}</p>
      <hr className="solid mt-5 mb-5" />
      <div className="flex justify-between">
        <Button
          className="rounded-md border-solid border-gray-200 text-xs font-light"
          label="Getting Started"
          size="medium"
          style="text"
          type="button"
          onClick={() => {}}
        />
        <div className="flex items-center">
          <Clock color="#1e1e20" size={22} />
          <Tooltip
            content={formatDateWithDayAndTime(createdAt)}
            position="bottom-end"
          >
            <Typography className="mx-2" style="body3">
              {createdDateTillNow(createdAt)}
            </Typography>
          </Tooltip>
          <Avatar
            size="medium"
            user={{
              name: userName,
            }}
            onClick={() => {}}
          />
        </div>
      </div>
      <DeleteAlert handleDelete={handleDelete} open={open} setOpen={setOpen} />
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  userName: PropTypes.string,
  notes: PropTypes.array,
  setNotes: PropTypes.func,
  id: PropTypes.string,
};

export default NoteItem;
