import React from 'react';

export default function Input({ name, group, address }) {
  return (
    <div>
      <input type="text" value={name} placeholder="이름" />
      <input type="text" value={group} placeholder="분류" />
      <input type="text" value={address} placeholder="주소" />
    </div>
  );
}
