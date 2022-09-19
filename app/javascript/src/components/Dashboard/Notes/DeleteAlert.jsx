import React from "react";

import { Alert } from "neetoui";
import propTypes from "prop-types";

const DeleteAlert = ({ open, setOpen, handleDelete }) => (
  <Alert
    isOpen={open}
    message="Are you sure you want to delete the note? This action cannot be undone."
    title="Delete Note"
    onClose={() => setOpen(false)}
    onSubmit={handleDelete}
  />
);

DeleteAlert.propTypes = {
  open: propTypes.bool,
  setOpen: propTypes.func,
  handleDelete: propTypes.func,
};

export default DeleteAlert;
