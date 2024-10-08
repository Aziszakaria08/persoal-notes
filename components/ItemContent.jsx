import React from "react";

function ItemContent({ item }) {
  const { title, createdAt, body } = item;
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default ItemContent;
