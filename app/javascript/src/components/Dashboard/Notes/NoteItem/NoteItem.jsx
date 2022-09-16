import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Button, Avatar, Tooltip, Typography } from "neetoui";
import PropTypes from "prop-types";

const NoteItem = ({ title, description, updatedAt, userName }) => (
  <div className="mb-4 w-full border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div className="flex justify-between">
      <h2>{title}</h2>
      <MenuVertical color="#1e1e20" size={24} />
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
        <Tooltip content="Wednesday,10:30am" position="bottom">
          <Typography className="mx-2" style="body3">
            {updatedAt}
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
  </div>
);

NoteItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  updatedAt: PropTypes.string,
  userName: PropTypes.string,
};

export default NoteItem;
