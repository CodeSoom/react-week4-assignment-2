import React from 'react';

export default function RestaurantForm({ onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
