import React from 'react';

import { useSelector } from 'react-redux';

export default function Input({ onChange, onClick }) {
  const { name, category, address } = useSelector((selector) => ({
    name: selector.input.name,
    category: selector.input.category,
    address: selector.input.address
  }));

  return (
    <div>
      <form onSubmit={onClick}>
        <input type="text" name="name" placeholder="이름" onChange={
          (e) => onChange(e)
        } value={name}/>
        <input type="text" name="category" placeholder="분류" onChange={
          (e) => onChange(e)
        } value={category}/>
        <input type="text" name="address" placeholder="주소" onChange={
          (e) => onChange(e)
        } value={address}/>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}