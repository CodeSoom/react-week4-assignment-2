import React from 'react';

export default function Input() {
  return (
    <p>
      <input type="text" placeholder="이름" data-testid="name" />
      <input type="text" placeholder="분류" data-testid="category" />
      <input type="text" placeholder="주소" data-testid="address" />
      <button type="button">등록</button>
    </p>
  );
}
