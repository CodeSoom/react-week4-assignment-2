import React from 'react';

import ListContainer from './ListContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button">
        등록
      </button>
    </div>
  );
}
