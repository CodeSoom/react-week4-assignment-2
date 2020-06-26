import React from 'react';

import Item from './Item';

export default function List() {
  const information = {
    name: '마녀주방',
    category: '한식',
    address: '강남',
  };

  return (
    <Item 
      information={information}
    />
  );
}
