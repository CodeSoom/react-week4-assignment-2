import React from 'react';

const Input = ({ restaurant: { name, category, address }, onChange }) => (
  <>
    <input type="text" placeholder="이름" name="name" onChange={onChange} value={name} />
    <input type="text" placeholder="분류" name="category" onChange={onChange} value={category} />
    <input type="text" placeholder="주소" name="address" onChange={onChange} value={address} />
  </>
);

export default Input;
