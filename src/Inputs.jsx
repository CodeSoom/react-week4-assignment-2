import React from 'react';

export default function Inputs({ handleClickButton }) {
  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button" onClick={handleClickButton}>등록</button>
    </div>
  );
}
