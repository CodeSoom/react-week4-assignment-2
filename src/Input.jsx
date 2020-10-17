import React from 'react';

const Input = ({ restaurant: { name, type, address }, onChange }) => (
  <>
    <input type="text" placeholder="이름" name="name" onChange={onChange} value={name} />
    <input type="text" placeholder="분류" name="type" onChange={onChange} value={type} />
    <input type="text" placeholder="주소" name="address" onChange={onChange} value={address} />
  </>
);

export default Input;
