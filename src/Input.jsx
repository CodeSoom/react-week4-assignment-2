import React from 'react';

function handleButtonClick() {}

export default function Input() {
  return (
    <div>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button" onClick={handleButtonClick}>
        등록
      </button>
    </div>
  );
}
