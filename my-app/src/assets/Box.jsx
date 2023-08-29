import React from 'react';

const Box = ({ on, toggle }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: on ? "#222222" : "transparent" }}
      onClick={toggle}
    ></div>
  );
};

export default Box;
