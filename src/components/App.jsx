import { useState } from 'react';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantForm from './RestaurantForm';

import { Restaurant } from '../@types';
import { RESTAURANTS_LIST } from '../__mocks__';

jest.mock('react-redux');

export default function App() {
  const [restaurants, setRestaurants] = useState(RESTAURANTS_LIST);
  const [inputValues, setInputValues] = useState({
    name: '',
    category: '',
    location: '',
  });

  const updateRestaurantForm = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewRestaurant = (e) => {
    e.preventDefault();

    const newRestaurant = new Restaurant(restaurants, inputValues);

    setRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      newRestaurant,
    ]);
  };

  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>

      <RestaurantsContainer />
      <RestaurantForm
        inputValues={inputValues}
        onUpdateRestaurantForm={updateRestaurantForm}
        onAddNewRestaurant={addNewRestaurant}
      />
    </div>
  );
}
