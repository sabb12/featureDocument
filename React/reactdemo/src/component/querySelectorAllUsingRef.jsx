import React, { useEffect, useRef } from "react";

export default function MyComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const menus = containerRef.current.querySelectorAll(".menu");
      console.log(menus); // This will log all the elements with the class "menu"
    }
  }, []); // The empty array ensures this runs only once, similar to componentDidMount

  return (
    <div ref={containerRef}>
      <div className="menu">1</div>
      <div className="menu">2</div>
      <div className="menu">3</div>
      <div className="menu">4</div>
      <div className="menu">5</div>
      <div className="menu">6</div>
    </div>
  );
}
