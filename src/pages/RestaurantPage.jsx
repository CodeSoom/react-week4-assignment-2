/* eslint-disable no-alert */
import { useState } from 'react';
import RestaurantInput from '../components/RestaurantInput';
import RestaurantList from '../components/RestaurantList';

const RestaurantPage = () => {
  const [name, setName] = useState('');
  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const [category, setCategory] = useState('');
  const handleChangeCategory = ({ target: { value } }) => {
    setCategory(value);
  };

  const [address, setAddress] = useState('');
  const handleChangeAddressName = ({ target: { value } }) => {
    setAddress(value);
  };

  const handleClick = () => {
    if (!name || !category || !address) {
      alert('');
    }
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantInput
        valueName={name}
        onChangeName={handleChangeName}
        valueCategory={category}
        onChangeCategory={handleChangeCategory}
        valueAddress={address}
        onChangeAddress={handleChangeAddressName}
        onClick={handleClick}
      />
      <RestaurantList />
    </div>
  );
};

export default RestaurantPage;
