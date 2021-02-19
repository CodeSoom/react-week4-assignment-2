import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function FormContainer() {
  const {
    inputs,
  } = useSelector((state) => ({
    inputs: state.inputs,
  }));

  const dispatch = useDispatch();

  const { title, category, address } = inputs;

  const handleChageInput = (event) => {
    const { value, name } = event.target;

    dispatch({
      type: 'changeInput',
      payload: { value, name },
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        value={title}
        name="name"
        onChange={handleChageInput}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        name="category"
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        name="address"
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default FormContainer;
