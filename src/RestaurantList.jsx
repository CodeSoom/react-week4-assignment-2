import React from 'react';
import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const { restaurants } = useSelector((state) => state);

  const style = {
    margin: '0 10px',
  };

  return (
    <ul>
      {restaurants.map(({
        name, type, adress, id,
      }) => (
        <li key={id}>
          <span>
            {name}
          </span>
          <span style={style}>|</span>
          <span>
            {type}
          </span>
          <span style={style}>|</span>
          <span>
            {adress}
          </span>
        </li>
      ))}

    </ul>
  );
}
