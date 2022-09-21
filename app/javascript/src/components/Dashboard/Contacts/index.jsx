import React, { useState } from "react";

import { Button, Table, Pagination } from "neetoui";
import { Header, Container } from "neetoui/layouts";

import { CONTACTS } from "./constants";
import ContactMenu from "./ContactMenu";
import { buildContactColumnData } from "./utils";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
        <Table
          columnData={buildContactColumnData()}
          currentPageNumber={1}
          defaultPageSize={10}
          rowData={CONTACTS}
          onRowClick={() => {}}
          onRowSelect={() => {}}
        />
        <div className="my-8 flex w-full justify-end">
          <Pagination count={10} navigate={() => {}} pageNo={1} pageSize={9} />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
