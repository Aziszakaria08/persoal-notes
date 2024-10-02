import React from "react";
import Titles from "./Titles";
import FormInput from "./FormInput";

function NoteInput({ onAddItem }) {
  return (
    <div className="note-input">
      <Titles title="Buat Catatan" />
      <FormInput onAddItem={onAddItem} />
    </div>
  );
}

export default NoteInput;
