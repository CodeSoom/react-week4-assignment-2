import React from 'react';

export default function Item({ restaurant: { title, kind, address } }) {
  return (
    <li>{`${title} | ${kind} | ${address}`}</li>
  );
}
