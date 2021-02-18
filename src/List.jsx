import React from 'react';
import ListItem from './ListItem';

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
          <ListItem
            key={id}
            name={name}
            category={category}
            address={address}
          />
        ))
      }
    </ul>
  );
}

export default List;
