import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    inputs: {
      name: '',
      category: '',
      address: '',
    },
  });

  const { name, category, address } = state.inputs;

  const handleChangeInput = (event) => {
    const { value, name: eventName } = event.target;

    setState({
      ...state,
      inputs: {
        ...state.inputs,
        [eventName]: value,
      },
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="category"
          placeholder="분류"
          value={category}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={address}
          onChange={handleChangeInput}
        />
      </form>
    </div>
  );
}
