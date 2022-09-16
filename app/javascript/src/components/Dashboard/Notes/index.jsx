import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NoteLayout from "./NoteLayout";
import NoteMenu from "./NoteMenu";
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
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
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
        <NoteMenu />
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
