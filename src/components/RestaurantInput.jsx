import React from 'react';

const RestaurantInput = ({
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) => {
  return (
    <>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" placeholder="이름" onChange={onChangeName} />
      <label htmlFor="category">분류</label>
      <input type="text" id="category" placeholder="분류" onChange={onChangeCategory} />
      <label htmlFor="address">주소</label>
      <input type="text" id="address" placeholder="주소" onChange={onChangeAddress} />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
};

export default RestaurantInput;
