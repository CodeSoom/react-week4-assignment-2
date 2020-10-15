import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    nameTitle: '',
    classify: '',
    location: '',
  });

  const { nameTitle, classify, location } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleClick = () => {
    setState({
      ...state,
      nameTitle,
      classify,
      location,
    });
  };
  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        <li>마녀주방 | 한식 | 서울시 강남구</li>
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
