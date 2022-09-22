import React from "react";

import { Alert } from "neetoui";
import propTypes from "prop-types";

const DeleteAlert = ({ showDeleteAlert, setShowDeleteAlert, handleDelete }) => (
  <Alert
    isOpen={showDeleteAlert}
    message="Are you sure you want to delete contact? These changes cannot be undone."
    title="Delete Contact"
    onClose={() => setShowDeleteAlert(false)}
    onSubmit={handleDelete}
  />
);

DeleteAlert.propTypes = {
  showDeleteAlert: propTypes.bool,
  setShowDeleteAlert: propTypes.func,
  handleDelete: propTypes.func,
};

export default DeleteAlert;
