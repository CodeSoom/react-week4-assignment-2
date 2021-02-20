import React from 'react';

export default function List({ reservations }) {
  if (reservations.length === 0) {
    return (
      <p>예약한 식당이 없습니다!</p>
    );
  }

  return (
    <ul>
      {reservations.map((reservation) => (
        <li
          key={reservation.id}
        >
          {reservation.name}
          |
          {reservation.category}
          |
          {reservation.address}
        </li>
      ))}
    </ul>
  );
}
