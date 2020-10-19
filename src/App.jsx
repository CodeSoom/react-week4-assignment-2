import React from 'react';

import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  //TODO: 초기 실행
  //restaurants에 데이터 넣기 => dispatch로 => store가 바뀜
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
