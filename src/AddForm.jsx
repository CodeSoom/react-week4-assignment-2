import React from 'react';

function AddForm({
  inputTitles: {
    name, category, address,
  },
  onChangeName,
  onChangeCategory,
  onChangeAddress,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={onChangeCategory}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={onChangeAddress}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default AddForm;
