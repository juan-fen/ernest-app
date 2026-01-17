import { useState, useEffect, useRef } from "react";
import "./Viewport.css";

function Viewport({ id }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const viewportRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (viewportRef.current) {
        const rect = viewportRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    };

    // Initial measurement
    updateDimensions();

    // Update on window resize
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener("resize", updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="viewport" ref={viewportRef}>
      <div className="viewport-id">{id}</div>
      <div className="viewport-dimensions">
        {dimensions.width} × {dimensions.height}
      </div>
    </div>
  );
}

export default Viewport;
