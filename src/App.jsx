import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    restaurant: {
      name: '',
      type: '',
      address: '',
    },
  });

  function handleChangeTitle(event) {
    const { value, name } = event.target;
    setState({
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    });
  }

  return (
    <>
      <Page onChangeRestaurant={handleChangeTitle} />
    </>
  );
}
