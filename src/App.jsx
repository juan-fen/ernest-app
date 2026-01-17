import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";

function App() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleRowsChange = (e) => {
    const value = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    setRows(value);
  };

  const handleColumnsChange = (e) => {
    const value = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    setColumns(value);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar
        rows={rows}
        columns={columns}
        onRowsChange={handleRowsChange}
        onColumnsChange={handleColumnsChange}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      <div className="main-content">
        <Grid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default App;
