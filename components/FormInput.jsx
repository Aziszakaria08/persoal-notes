import React, { useState } from "react";
import { showFormattedDate } from "../src/utils";

function FormInput({ onAddItem }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [remainingChars, setremainingChars] = useState(30);

  const handleTitleChanges = (e) => {
    const input = e.target.value;
    const maxCharacters = 30;

    if (input.length <= maxCharacters) {
      setTitle(input);
      setremainingChars(maxCharacters - input.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 30) {
      return;
    }
    const newItem = {
      id: Math.floor(Math.random() * 12345678),
      title,
      body: message,
      createdAt: showFormattedDate(new Date()),
      archived: false,
    };
    onAddItem(newItem);
    setTitle("");
    setMessage("");
    setremainingChars(30);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="note-input__title__char-limit">
        Sisa Karakter: {remainingChars}
      </div>
      <input
        type="text"
        className="note-input__title"
        required
        placeholder="Silahkan masukan Judul"
        value={title}
        onChange={handleTitleChanges}
      />
      <textarea
        className="note-input__body"
        placeholder="tuliskan catatanmu disini"
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button>Buat</button>
    </form>
  );
}

export default FormInput;
