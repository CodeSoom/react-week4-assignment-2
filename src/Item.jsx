import React from 'react';

export default function Item({ info: { name, category, location } }) {
  return (
    <li>{`${name} | ${category} | ${location}`}</li>
  );
}
