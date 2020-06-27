import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        <li>깐부치킨 | 치킨 | 용인수지</li>
      </ul>
      <form>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="분류" />
        <input type="text" placeholder="주소" />
        <input type="button" value="등록" />
      </form>
    </div>
  );
}
