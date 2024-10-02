import React from "react";
import Titles from "../../components/Titles";
import NoteInput from "../../components/NoteInput";
import NoteList from "../../components/NoteList";

function Body({ data, onAddItem, onDeleteItem, onToggleItem, onSearch }) {
  const activesNotes = data.filter((item) => !item.archived);
  const archivedNotes = data.filter((item) => item.archived);

  const filteredActiveNotes = activesNotes.filter((item) =>
    item.title.toLowerCase().includes(onSearch.toLowerCase())
  );
  const filteredArchivedNotes = archivedNotes.filter((item) =>
    item.title.toLowerCase().includes(onSearch.toLowerCase())
  );

  return (
    <div className="note-app__body">
      <NoteInput onAddItem={onAddItem} />
      <Titles title="Catatan Aktif" />
      {filteredActiveNotes.length > 0 ? (
        <NoteList
          data={filteredActiveNotes}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ) : (
        <p>Tidak ada catatan</p>
      )}
      <Titles title="Arsip" />
      {filteredArchivedNotes.length > 0 ? (
        <NoteList
          data={filteredArchivedNotes}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </div>
  );
}

export default Body;
