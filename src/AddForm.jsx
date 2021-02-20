import React from 'react';

export default function AddForm({ onChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}
