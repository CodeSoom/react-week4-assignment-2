import React from 'react';

const Input = ({ onChange }) => (
  <>
    <input type="text" placeholder="이름" name="name" onChange={onChange} />
    <input type="text" placeholder="분류" name="type" onChange={onChange} />
    <input type="text" placeholder="주소" name="address" onChange={onChange} />
  </>
);

export default Input;
