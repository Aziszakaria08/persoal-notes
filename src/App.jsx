import "./App.css";
import Header from "./Layout/Header";
import Body from "./Layout/Body";
import { useState } from "react";
import { getInitialData } from "./utils";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(getInitialData);

  const handleSearch = (q) => {
    setSearchQuery(q);
  };

  const handleAddItem = (item) => {
    setData([...data, item]);
  };

  const handleDeleteItem = (id) => {
    const newItems = data.filter((item) => item.id !== id);
    setData(newItems);
  };

  const handleToggleItem = (id) => {
    setData((items) =>
      items.map((item) =>
        item.id === id ? { ...item, archived: !item.archived } : item
      )
    );
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Body
        data={data}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onSearch={searchQuery}
      />
    </>
  );
}

export default App;
