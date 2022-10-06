import React from 'react';

export default function Input({
  shopName,
  shopType,
  shopAddress,
  onChangeName,
  onChangeType,
  onChangeAddress,
  onClickSetList,
}) {
  return (
    <>
      <label htmlFor="input-name" style={{ display: 'none' }}>레스토랑명</label>
      <input id="nput-name" type="text" value={shopName} onChange={onChangeName} />
      <label htmlFor="input-type" style={{ display: 'none' }}>레스토랑 리스트</label>
      <input id="nput-type" type="text" value={shopType} onChange={onChangeType} />
      <label htmlFor="input-address" style={{ display: 'none' }}>주소</label>
      <input id="nput-address" type="text" value={shopAddress} onChange={onChangeAddress} />
      <button type="button" onClick={onClickSetList}>등록</button>
    </>
  );
}
