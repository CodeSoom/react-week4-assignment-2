import React from 'react';
import Registration from './Registration';

export default function List({ registrations }) {
  return (
    <ol>
      {registrations.map((registration) => (
        <Registration
          key={registration.id}
          registration={registration}
        />
      ))}
    </ol>
  );
}
