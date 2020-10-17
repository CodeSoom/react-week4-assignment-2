import React from 'react';

const item = ({ restaurant: { name, type, address } }) => (
  <li>
    {name}
    {' '}
    |
    {type}
    {' '}
    |
    {address}
  </li>
);

export default item;
