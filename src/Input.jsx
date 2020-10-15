import React from 'react';

export default function Input({ restaurant }) {
  return (
    <div>
      <input type="text" value={restaurant.name} />
      <input type="text" value={restaurant.category} />
      <input type="text" value={restaurant.address} />
      <button type="button">등록</button>
    </div>
  );
}
