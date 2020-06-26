import React from 'react';

export default function Input({ onChange, onClick }) {

  return (
    <div>
      <form onSubmit={onClick}>
        <input type="text" name="name" placeholder="이름" onChange={
          (e) => onChange({ key: 'name', value: e.target.value })
        }/>
        <input type="text" name="category" placeholder="분류" onChange={
          (e) => onChange({ key: 'category', value: e.target.value })
        }/>
        <input type="text" name="address" placeholder="주소" onChange={
          (e) => onChange({ key: 'address', value: e.target.value })
        }/>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}