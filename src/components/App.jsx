import { useState } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantForm from './RestaurantForm';

import { addNewRestaurant } from '../store/actions';
import { Restaurant } from '../@types';

export default function App() {
  const [inputValues, setInputValues] = useState({
    name: '',
    category: '',
    location: '',
  });

  const dispatch = useDispatch();

  const updateRestaurantForm = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitNewRestaurantForm = (e) => {
    e.preventDefault();

    const newRestaurant = new Restaurant(inputValues);

    dispatch(addNewRestaurant(newRestaurant));
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
        onAddNewRestaurant={submitNewRestaurantForm}
      />
    </div>
  );
}
