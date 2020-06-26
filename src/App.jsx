import React from 'react';
import ListContainer from './Component/ListContainer';

export default function App() {
  return (
    <div>
      {/* App Component */}
      <h1>Restaurants</h1>
      {/* List Component */}
      <ListContainer />
      {/* Input Component */}
      <p>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="분류" />
        <input type="text" placeholder="주소" />
        <button type="button">등록</button>
      </p>
    </div>
  );
}
