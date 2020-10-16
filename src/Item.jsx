import React from 'react';

export default function Item({ restaurantInfo }) {
  const { name, type, location } = restaurantInfo;

  return <li>{`${name} | ${type} | ${location}`}</li>;
}
