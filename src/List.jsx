import React from 'react';

export default function List({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map((task) => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}
