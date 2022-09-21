import React, { useState } from "react";

import { Table as NeetoUITable, Toastr } from "neetoui";

import { buildContactColumnData } from "components/Dashboard/Contacts/utils";

import DeleteAlert from "../DeleteAlert";

const ContactTable = ({ contacts, setContacts }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState("");

  const handleDelete = () => {
    setContacts(contacts.filter(contact => contact.id !== selectedContactId));
    Toastr.success("Contact deleted successfully.");
    setShowDeleteAlert(false);
  };
  return (
    <>
      <NeetoUITable
        currentPageNumber={1}
        defaultPageSize={10}
        rowData={contacts}
        columnData={buildContactColumnData(
          setShowDeleteAlert,
          setSelectedContactId
        )}
        onRowClick={() => {}}
        onRowSelect={() => {}}
      />
      <DeleteAlert
        handleDelete={handleDelete}
        setShowDeleteAlert={setShowDeleteAlert}
        showDeleteAlert={showDeleteAlert}
      />
    </>
  );
};

export default ContactTable;
