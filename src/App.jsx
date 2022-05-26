import { useState } from 'react';
import RestaurantList from './RestaurantList';

import TextBox from './TextBox';

export default function App() {
  const state = [{
    id: 1,
    name: '마녀주방',
    address: '한식',
    category: '서울시 강남구',
  }, {
    id: 2,
    name: '시카고피자',
    address: '양식',
    category: '이태원동',
  }, {
    id: 3,
    name: '키와미',
    address: '일식',
    category: '분당구 정자동',
  }];
  const [restaurants, setRestaurants] = useState(state);
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: '',
    address: '',
    category: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurantInfo({
      [name]: value,
    });
  };
  const handleClick = () => {
    setRestaurants((previousRestaurants) => [...previousRestaurants, restaurantInfo]);
    setRestaurantInfo({
      name: '',
      address: '',
      category: '',
    });
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
      <TextBox restaurantInfo={restaurantInfo} onChange={handleChange} onClick={handleClick} />
    </div>
  );
}
