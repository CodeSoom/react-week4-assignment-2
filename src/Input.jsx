import React from 'react';

export default function Input({ onChange, onClick }) {
  return (
    <div>
      <input type="text" placeholder="이름" onChange={onChange} />
      <input type="text" placeholder="분류" onChange={onChange} />
      <input type="text" placeholder="주소" onChange={onChange} />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
