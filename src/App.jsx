import React from 'react';

export default function App() {
  return (
    <div>
      <h2>Restaurants</h2>
      <p>레스토랑1|분류1|주소1</p>
      <p>레스토랑2|분류2|주소2</p>
      <p>레스토랑3|분류3|주소3</p>

      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button">등록</button>
    </div>
  );
}
