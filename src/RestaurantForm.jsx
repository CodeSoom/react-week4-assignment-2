import React from 'react';

export default function RestaurantCreateContainer({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
