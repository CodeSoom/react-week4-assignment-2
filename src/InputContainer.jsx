import React from 'react';

import Input from './Input';

export default function InputContainer() {
  return (
    <div>
      <Input
        placeholder="이름"
      />
      <Input
        placeholder="분류"
      />
      <Input
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
