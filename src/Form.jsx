import React from 'react';

import Input from './Input';

export default function Form() {
  return (
    <div>
      <Input placeholderText="이름" />
      <Input placeholderText="분류" />
      <Input placeholderText="주소" />
    </div>
  );
}
