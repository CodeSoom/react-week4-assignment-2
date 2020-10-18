import React from 'react';

const item = ({ restaurant: { name, category, address } }) => (
  <li>
    {name}
    {' '}
    |
    {' '}
    {category}
    {' '}
    |
    {' '}
    {address}
  </li>
);

export default item;
