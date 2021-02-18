import React from 'react';

import { useSelector } from 'react-redux';

function handleButtonClick() {}

export default function App() {
  const registers = useSelector((state) => state.registers);

  if (registers.length === 0) {
    return (
      <div>
        <h1>Restaurant</h1>
        <button type="button" onClick={handleButtonClick}>
          등록
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Restaurant</h1>
      <ul>
        <li>
          {registers.information}
        </li>
      </ul>
      <button type="button" onClick={handleButtonClick}>
        등록
      </button>
    </div>
  );
}
