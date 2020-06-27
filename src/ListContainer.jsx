import React from 'react';

import List from './List';

export default function ListContainer() {
  const restaurants = [
    {
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    },
    {
      id: 2, name: '깐부치킨', category: '치킨', address: '용인수지',
    },
  ];

  return (
    <List
      restaurants={restaurants}
    />
  );
}
