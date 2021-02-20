import React from 'react';
import { useSelector } from 'react-redux';

export default function List() {
  const registers = useSelector((state) => state.registers);

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
