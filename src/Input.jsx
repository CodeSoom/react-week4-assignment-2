import React from 'react';

export default function Input({
  onChange, onClick,
  inputState: { nameTitle, classification, location },
}) {
  return (
    <div>
      <input name="nameTitle" value={nameTitle} type="text" placeholder="이름" onChange={onChange} />
      <input name="classification" value={classification} type="text" placeholder="분류" onChange={onChange} />
      <input name="location" value={location} type="text" placeholder="장소" onChange={onChange} />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
