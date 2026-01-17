import { useMemo } from "react";
import "./Grid.css";
import Viewport from "./Viewport";

function Grid({ rows, columns }) {
  const viewports = useMemo(() => {
    const items = [];
    for (let i = 0; i < rows * columns; i++) {
      items.push(i);
    }
    return items;
  }, [rows, columns]);

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {viewports.map((id) => (
        <Viewport key={id} id={id} />
      ))}
    </div>
  );
}

export default Grid;
