import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search, Settings, Plus } from "neetoicons";
import { Button, PageLoader, Typography } from "neetoui";
import { Container, Header, MenuBar } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NoteLayout from "./NoteLayout";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex">
        <MenuBar showMenu title="Notes">
          <MenuBar.Block active count={13} label="All" />
          <MenuBar.Block count={2} label="Users" />
          <MenuBar.Block count={7} label="Leads" />
          <MenuBar.Block count={4} label="Visitors" />
          <MenuBar.SubTitle
            iconProps={[
              {
                icon: Search,
              },
            ]}
          >
            <Typography
              component="h4"
              style="h5"
              textTransform="uppercase"
              weight="bold"
            >
              Segments
            </Typography>
          </MenuBar.SubTitle>
          <MenuBar.Block count={80} label="Europe" />
          <MenuBar.Block count={60} label="Middle-East" />
          <MenuBar.Block count={60} label="Asia" />
          <MenuBar.SubTitle
            iconProps={[
              {
                icon: Search,
              },
              {
                icon: Plus,
              },
              {
                icon: Settings,
              },
            ]}
          >
            <Typography
              component="h4"
              style="h5"
              textTransform="uppercase"
              weight="bold"
            >
              Tags
            </Typography>
          </MenuBar.SubTitle>
          <MenuBar.Block count={80} label="Sales" />
          <MenuBar.Block count={60} label="Finance" />
          <MenuBar.Block count={60} label="User Experience" />
        </MenuBar>
        <Container>
          <Header
            menuBarToggle={() => {}}
            title="All Notes"
            actionBlock={
              <Button
                icon="ri-add-line"
                label="Add Note"
                onClick={() => setShowNewNotePane(true)}
              />
            }
            searchProps={{
              value: searchTerm,
              placeholder: "Search Name, Email, Phone Number, Etc",
              onChange: e => setSearchTerm(e.target.value),
            }}
          />
          {notes.length ? (
            <NoteLayout />
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              primaryAction={() => setShowNewNotePane(true)}
              primaryActionLabel="Add New Note"
              subtitle="Add your notes to send customized emails to them."
              title="Looks like you don't have any notes!"
            />
          )}
        </Container>
      </div>
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedNoteIds={selectedNoteIds}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default Notes;
