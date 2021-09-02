import React from 'react';

import Input from './Input';

export default function Page({ restaurantTitles, onChange, onClick }) {
  return (
    <div>
      {restaurantTitles.map((restaurantTitle) => (
        <Input
          key={restaurantTitle.name}
          name={restaurantTitle.name}
          placeholder={restaurantTitle.placeholder}
          value={restaurantTitle.value}
          onChange={onChange}
        />
      ))}

      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
