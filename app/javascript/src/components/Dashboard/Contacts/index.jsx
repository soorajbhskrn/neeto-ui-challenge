import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Pagination } from "neetoui";
import { Header, Container } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import ContactMenu from "./ContactMenu";
import ContactTable from "./ContactTable/ContactTable";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [contacts, setContacts] = useState(CONTACTS);
  return (
    <div className="flex w-full">
      <ContactMenu />
      <Container>
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <ContactTable contacts={contacts} setContacts={setContacts} />
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
    </div>
  );
};

export default Contacts;
