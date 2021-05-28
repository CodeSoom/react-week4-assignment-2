import React from 'react';

import Input from './presentational/Input';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        <li>마녀주방 | 한식 | 서울시 강남구 </li>
        <li>시카고피자 | 양식 | 이태원동</li>
      </ul>
      <Input />
    </div>
  );
}
