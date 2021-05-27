import React from 'react';

export default function Page({
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClickRestaurant,
}) {
  return (
    <div>
      <h1>Restaurants</h1>
      <input type="text" placeholder="이름" onChange={onChangeName} />
      <input type="text" placeholder="분류" onChange={onChangeCategory} />
      <input type="text" placeholder="주소" onChange={onChangeAddress} />
      <button type="button" onClick={onClickRestaurant}>등록</button>
    </div>
  );
}
