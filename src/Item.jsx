import React from 'react';

export default function Item({ restaurant: { name, category, location } }) {
  return (
    <li>{`${name} | ${category} | ${location}`}</li>
  );
}
