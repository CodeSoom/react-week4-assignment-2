import React from 'react';

export default function List({ registers }) {
  if (registers.length === 0) {
    return (<div />);
  }
  return (
    <div>
      <ul>
        <li>
          {registers[0].information}
        </li>
      </ul>
    </div>
  );
}
