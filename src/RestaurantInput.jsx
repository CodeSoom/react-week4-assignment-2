import React from 'react';

function RestaurantInput({ onChange }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="이름"
        onChange={() => { onChange({ type: 'UPDATE_RESTAURANTINFO', payload: { name: '선정릉역 깐부치킨' } }); }}
      />
      <input
        type="text"
        placeholder="분류"
        onChange={() => { onChange({ type: 'UPDATE_RESTAURANTINFO', payload: { category: '한식' } }); }}
      />
      <input
        type="text"
        placeholder="주소"
        onChange={() => { onChange({ type: 'UPDATE_RESTAURANTINFO', payload: { address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점' } }); }}
      />
      <button type="button">등록</button>
    </div>
  );
}

export default RestaurantInput;
