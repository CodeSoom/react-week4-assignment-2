import React, { useState } from 'react';

export default function App() {
  const initialState = {
    nameTitle: '',
    classify: '',
    location: '',
  };

  const [inputState, setInput] = useState(initialState);

  const [state, setState] = useState({
    newId: 100,
    restaurantLists: [],
  });

  const { nameTitle, classify, location } = inputState;

  const { newId, restaurantLists } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputState,
      [name]: value,
    });
  };

  const handleClick = () => {
    setState({
      newId: newId + 1,
      restaurantLists: [
        ...restaurantLists,
        {
          id: newId,
          nameTitle,
          classify,
          location,
        },
      ],
    });

    setInput({
      ...initialState,
    });
  };

  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurantLists.map(({ nameTitle, classify, location }) => (
          <li>
            {nameTitle}
            {' '}
            |
            {' '}
            {classify}
            {' '}
            |
            {' '}
            {location}
          </li>
        ))}
      </ul>
      <div>
        <input name="nameTitle" value={nameTitle} type="text" placeholder="이름" onChange={handleChange} />
        <input name="classify" value={classify} type="text" placeholder="분류" onChange={handleChange} />
        <input name="location" value={location} type="text" placeholder="장소" onChange={handleChange} />
        <button type="button" onClick={handleClick}>등록</button>
      </div>
    </>
  );
}
