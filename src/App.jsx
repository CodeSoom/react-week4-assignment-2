import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import { setRestaurants } from './actions';

export default function App() {
  // TODO:
  // 초기 실행 => useEffect
  // restaurants에 데이터 넣기 => dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <div>
      <h1>Restautants</h1>
      <RestaurantContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
