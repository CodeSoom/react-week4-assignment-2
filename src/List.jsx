import React from 'react';

export default function List() {
  const registers = [{
    id: 1,
    information: '마녀식당 | 한식 | 서울시 강남구',
  }];

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
