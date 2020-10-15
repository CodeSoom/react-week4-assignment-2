import React from 'react';

export default function Item({
  key,
  name,
  type,
  address,
}) {
  return (
    <li key={key}>
      {`${name} | ${type} | ${address}`}
    </li>
  );
}
