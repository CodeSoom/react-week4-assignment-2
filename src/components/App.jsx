import { useState } from 'react';
import RestaurantForm from './RestaurantForm';
import Restaurants from './Restaurants';

export const RESTAURANTS_LIST = [
  {
    id: 1,
    name: '홍콩반점',
    category: '중식',
    location: '서울시',
  },
  {
    id: 2,
    name: '달초밥',
    category: '일식',
    location: '안산시',
  },
  {
    id: 3,
    name: '막퍼주는 시골밥상',
    category: '한식',
    location: '인천시',
  },
];

export default function App() {
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

  const addNewRestaurant = () => {

  };

  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>

      <Restaurants restaurants={RESTAURANTS_LIST} />
      <RestaurantForm
        inputValues={inputValues}
        onUpdateRestaurantForm={updateRestaurantForm}
        onAddNewRestaurant={addNewRestaurant}
      />
    </div>
  );
}
