import React from 'react';

export default function Item({ name, type, location }) {
  return <li>{`${name} | ${type} | ${location}`}</li>;
}
