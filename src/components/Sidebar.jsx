import "./Sidebar.css";

function Sidebar({
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
  isOpen,
  onToggle,
}) {
  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label="Toggle sidebar"
      >
        {isOpen ? "←" : "→"}
      </button>
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-content">
          <h2>Grid Settings</h2>

          <div className="setting-group">
            <label htmlFor="rows-input">Rows</label>
            <input
              id="rows-input"
              type="number"
              min="1"
              max="10"
              value={rows}
              onChange={onRowsChange}
              aria-label="Number of rows"
            />
            <span className="value-display">{rows}</span>
          </div>

          <div className="setting-group">
            <label htmlFor="columns-input">Columns</label>
            <input
              id="columns-input"
              type="number"
              min="1"
              max="10"
              value={columns}
              onChange={onColumnsChange}
              aria-label="Number of columns"
            />
            <span className="value-display">{columns}</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
