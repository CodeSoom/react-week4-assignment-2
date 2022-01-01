import React from 'react';

const RestaurantInput = ({
  valueName,
  valueCategory,
  valueAddress,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) => {
  return (
    <>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" placeholder="이름" value={valueName} onChange={onChangeName} />
      <label htmlFor="category">분류</label>
      <input type="text" id="category" name="category" placeholder="분류" value={valueCategory} onChange={onChangeCategory} />
      <label htmlFor="address">주소</label>
      <input type="text" id="address" name="address" placeholder="주소" value={valueAddress} onChange={onChangeAddress} />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
};

export default RestaurantInput;
