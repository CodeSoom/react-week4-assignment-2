import React from 'react';

export default function Input({ reservations = [] }) {
  if (reservations.length === 0) {
    return (
      <div />
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
