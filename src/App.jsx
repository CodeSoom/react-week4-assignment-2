import { useState } from 'react';
import RestaurantList from './RestaurantList';

import TextBox from './TextBox';

export default function App() {
  const initialState = {
    restaurantInfo: {
      name: '',
      address: '',
      category: '',
    },
    restaurants: [{
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
    }],
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousState) => ({
      ...previousState,
      restaurantInfo: {
        [name]: value,
      },
    }));
  };
  const handleClick = () => {
    setState((previousState) => ({
      restaurants: [...previousState.restaurants, previousState.restaurantInfo],
      restaurantInfo: {
        name: '',
        address: '',
        category: '',
      },
    }));
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={state.restaurants} />
      <TextBox
        restaurantInfo={state.restaurantInfo}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}
