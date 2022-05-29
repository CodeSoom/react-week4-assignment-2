import { useState } from 'react';

import Button from './Button';

import InputForm from './InputForm';

import RestaurantList from './RestaurantList';

export default function App() {
  const initialState = {
    name: '',
    category: '',
    address: '',
    restaurants: [],
  };

  const [data, setData] = useState(initialState);

  const handleChangeData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data, [name]: value,
    });
  };

  const lastIndexDerive = (arr) => arr[arr.length - 1];

  const handleAddData = () => {
    const {
      name,
      category,
      address,
      restaurants,
    } = data;

    if (!name || !category || !address) return;

    setData({
      ...initialState,
      restaurants: restaurants.concat({
        id: (lastIndexDerive(restaurants)?.id ?? 0) + 1,
        text: `${name} | ${category} | ${address}`,
      }),
    });
  };

  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantList restaurants={data.restaurants} />
      <InputForm onChange={handleChangeData} data={data} />
      <Button onClick={handleAddData} />
    </div>
  );
}
