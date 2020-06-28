import React from 'react';

export default function InputContainer() {
  return (
    <div>
      <p>
        <input placeholder="이름" />
        <input placeholder="분류" />
        <input placeholder="주소" />
        <button type="button">
          등록
        </button>
      </p>
    </div>
  );
}
