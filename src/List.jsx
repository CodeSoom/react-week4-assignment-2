import React from 'react';

export default function List({ registrations }) {
  return (
    <ol>
      {registrations.map((registration) => (
        <li key={1}>
          {registration.id}
          {' '}
          |
          {registration.address}
        </li>
      ))}
    </ol>
  );
}
