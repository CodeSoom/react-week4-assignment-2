import React from 'react';

export default function Input({
  onChange, onClick,
  infoValue: { name, category, address },
}) {
  return (
    <div>
      <input name="name" value={name} type="text" placeholder="이름" onChange={onChange} />
      <input name="category" value={category} type="text" placeholder="분류" onChange={onChange} />
      <input name="address" value={address} type="text" placeholder="장소" onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
