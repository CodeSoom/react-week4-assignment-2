import { useEffect } from 'react';

import { usseDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { setRestaurants } from './actions';

export default function App() {
  const dispatch = usseDispatch();

  // TODO: 초기 실행
  // restaurants에 데이터 넣기 => dispatch
  useEffect(() => {
    dispatch(setRestaurants);
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
