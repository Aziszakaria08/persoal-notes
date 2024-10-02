import React from "react";
import ItemContent from "./ItemContent";
import ItemActions from "./ItemActions";

function NoteList({ data, onDeleteItem, onToggleItem }) {
  return (
    <div className="notes-list">
      {data.map((item, _) => (
        <div key={item.id} className="note-item">
          <ItemContent item={item} />
          <ItemActions
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
