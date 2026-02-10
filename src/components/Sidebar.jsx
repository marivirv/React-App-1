import { useState, useCallback } from "react"

export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  let [filter, setFilter] = useState("")

  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return;

    setMenuItems(prev => [...prev, newMenuItem]);
    setNewMenuItem("");
  }, [newMenuItem]);

  let filteredItems = menuItems.filter(item => {
    let regex = new RegExp(filter, "i");
    return regex.test(item);
  });

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

