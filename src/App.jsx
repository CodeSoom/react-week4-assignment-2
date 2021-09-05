import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  // 초기 실행 useEffect 사용
  // restaurants에 데이터 넣기 => dispatch
  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </>
  );
}
