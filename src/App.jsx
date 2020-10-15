import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 103,
    restaurant: {
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
    restaurants: [
      {
        id: 101,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
      {
        id: 102,
        name: '시카고피자',
        category: '양식',
        address: '이태원동',
      },
    ],
  });

  const { newId, restaurants, restaurant } = state;

  const handleClickAdd = () => {
    setState({
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, { ...restaurant, id: newId }],
    });
  };

  const handleChange = (field) => (event) => {
    setState({
      ...state,
      restaurant: {
        ...restaurant,
        [field]: event.target.value,
      },
    });
  };

  return (
    <Page
      restaurants={restaurants}
      restaurant={restaurant}
      onClickAdd={handleClickAdd}
      onChange={handleChange}
    />
  );
}
