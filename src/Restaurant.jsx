import React from 'react';

export default function Restaurant({ name, category, address }) {
  return (
    <li>
      <span>
        {name}
        |
      </span>
      <span>
        {category}
        |
      </span>
      <span>{address}</span>
    </li>
  );
}
