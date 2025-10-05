import React from "react";

function loading() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </div>
  );
}

export default loading;
