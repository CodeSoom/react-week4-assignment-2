import React from 'react';

function RestaurantInput({ onChange, onClick }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="이름"
        name="name"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        onChange={onChange}
      />
      <button type="button" onClick={() => { onClick({ type: 'ADD_RESTAURANT' }); }}>등록</button>
    </div>
  );
}

export default RestaurantInput;
