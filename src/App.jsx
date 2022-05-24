import { useState } from 'react';

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
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            |
            {' '}
            {restaurant.address}
            {' '}
            |
            {' '}
            {restaurant.category}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="이름" onChange={handleChange} value={restaurantInfo.name} />
      <input type="text" placeholder="분류" onChange={handleChange} value={restaurantInfo.category} />
      <input type="text" placeholder="주소" onChange={handleChange} value={restaurantInfo.address} />
      <button type="button">등록</button>
    </div>
  );
}
