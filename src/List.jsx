import React from 'react';

function List({
  list,
}) {
  return (
    <ul>
      {
        list.map(({
          id,
          name,
          category,
          address,
        }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{category}</span>
            <span>{address}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default List;
