import React from 'react';

export default function Form({
  nameValue,
  classifyValue,
  addressValue,
  onChangeName,
  onChangeClassify,
  onChangeAddress,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="식당" value={nameValue} onChange={onChangeName} />
      <input type="text" placeholder="분류" value={classifyValue} onChange={onChangeClassify} />
      <input type="text" placeholder="주소" value={addressValue} onChange={onChangeAddress} />
      <button type="submit">등록</button>
    </form>
  );
}
