import React from 'react';

import Input from './Input';

export default function Form({ onChange, onClick }) {
  return (
    <p>
      <Input
        placeholder="이름"
        value="마녀주방"
        onChange={onChange}
      />
      <Input
        placeholder="분류"
        value="한식"
        onChange={onChange}
      />
      <Input
        placeholder="주소"
        value="서울시 강남구"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
