import React from 'react';

export default function Page({
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClickAddButton,
}) {
  return (
    <div>
      <input type="text" placeholder="이름" onChange={onChangeName} />
      <input type="text" placeholder="분류" onChange={onChangeCategory} />
      <input type="text" placeholder="주소" onChange={onChangeAddress} />
      <button type="button" onClick={onClickAddButton}>등록</button>
    </div>
  );
}
