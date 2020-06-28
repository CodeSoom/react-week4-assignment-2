import React from 'react';

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="식당" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="submit">등록</button>
    </form>
  );
}
