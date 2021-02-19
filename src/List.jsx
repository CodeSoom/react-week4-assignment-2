import React from 'react';

export default function List({ registers }) {
  return (
    <div>
      <ul>
        {registers.map((register) => (
          <li key={register.id}>{register.information}</li>
        ))}
      </ul>
    </div>
  );
}
