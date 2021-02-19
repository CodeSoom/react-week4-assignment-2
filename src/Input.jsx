import React from 'react';

export default function input() {
  return (
    <div>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />

      <button type="button">
        등록
      </button>
    </div>
  )
}
