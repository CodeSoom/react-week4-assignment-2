import React from 'react';

function ListItem({ name, category, address }) {
  return (
    <li>
      <span>{name}</span>
      <span>{category}</span>
      <span>{address}</span>
    </li>
  );
}

export default ListItem;
