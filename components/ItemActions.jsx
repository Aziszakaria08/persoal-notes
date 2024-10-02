import { MdDelete, MdArchive } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";

function ItemActions({ item, onDeleteItem, onToggleItem }) {
  const { id, archived } = item;
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => onDeleteItem(id)}
      >
        <MdDelete style={{ width: "20px", height: "20px" }} />
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onToggleItem(id)}
      >
        {archived ? (
          <FaArrowCircleUp style={{ width: "20px", height: "20px" }} />
        ) : (
          <MdArchive style={{ width: "20px", height: "20px" }} />
        )}
      </button>
    </div>
  );
}

export default ItemActions;
