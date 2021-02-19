import React from 'react';
import { useSelector } from 'react-redux';

function FormContainer() {
  const {
    inputs,
  } = useSelector((state) => ({
    inputs: state.inputs,
  }));

  const { name, category, address } = inputs;

  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        value={name}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default FormContainer;
