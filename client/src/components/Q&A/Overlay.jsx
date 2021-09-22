import React, { useState }from 'react';

const overlay =  {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  zIndex: "99"
}


const Overlay = () => {
  return (
    <div style={overlay}>

    </div>
  );
}

export default Overlay;

