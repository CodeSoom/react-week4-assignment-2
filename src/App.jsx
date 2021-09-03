import { useState } from 'react';

import Input from './Input';

export default function App() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <h1>
        Restaurants
      </h1>
      <Input
        ariaLabel="restaurantName"
        value={name}
        handleChange={handleChangeName}
      />
      <Input
        ariaLabel="restaurantCategory"
        value={category}
        handleChange={handleChangeCategory}
      />
      <Input
        ariaLabel="restaurantAddress"
        value={address}
        handleChange={handleChangeAddress}
      />
      <button type="button">
        등록
      </button>
    </>
  );
}
