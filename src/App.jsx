import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    inputs: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [],
    nextId: 1,
  });

  const { inputs, restaurants, nextId } = state;

  const { name, category, address } = inputs;

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

  const handleSubmitAddButton = () => {
    setState({
      ...state,
      nextId: nextId + 1,
      restaurants: [
        ...state.restaurants,
        {
          id: nextId,
          title: { name, category, address },
        },
      ],
    });
  };

  return (
    <div>
      <ul>
        {
          restaurants.map(({ id, title }) => (
            <li key={id}>
              <span>{title.name}</span>
              <span>{title.category}</span>
              <span>{title.address}</span>
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmitAddButton}>
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
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
