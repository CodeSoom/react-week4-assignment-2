import React from 'react';

import ListContainer from './ListContainer';

export default function App() {
  return (
    <div>
      <h1> Restaurant</h1>

      <ListContainer />

      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button">
        등록
      </button>

    </div>
  );
}
