import React from 'react';
import '../Box.css';
import Box from './Box';
import boxes from '../boxes';

const Main = () => {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return (
    <main>
      {squares.map((square) => (
        <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
      ))}
    </main>
  );
};

export default Main;
