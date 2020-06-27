import React from 'react';

export default function Input({
  onChange, onClick, name, category, address,
}) {
  return (
    <div>
      <form onSubmit={onClick} data-testid="form">
        <input
          type="text"
          name="name"
          placeholder="이름"
          onChange={
            (e) => onChange(e)
          }
          value={name}
        />
        <input
          type="text"
          name="category"
          placeholder="분류"
          onChange={
            (e) => onChange(e)
          }
          value={category}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          onChange={
            (e) => onChange(e)
          }
          value={address}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
