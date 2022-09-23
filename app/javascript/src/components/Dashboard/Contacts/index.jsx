import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Pagination } from "neetoui";
import { Header, Container } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import Menu from "./Menu";
import NewContactPane from "./Pane/NewContactPane";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(CONTACTS);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  return (
    <>
      <Menu />
      <Container>
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length > 0 ? (
          <Table contacts={contacts} setContacts={setContacts} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Contact"
            subtitle="Add new contacts to send customized emails to them."
            title="Looks like you don't have any contact!"
          />
        )}
        <div className="my-8 flex w-full justify-end">
          <Pagination count={10} navigate={() => {}} pageNo={1} pageSize={9} />
        </div>
      </Container>
      <NewContactPane
        setContacts={setContacts}
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
    </>
  );
};

export default Contacts;
