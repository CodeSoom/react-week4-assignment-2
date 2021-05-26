import React from 'react';

import { useSelector } from 'react-redux';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  const handleClickAddRestaurants = () => {
    console.log('click!!!');
  };

  const handleChangeInputElement = () => {
    console.log('change!!!');
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({
          id, name, type, address,
        }) => <li key={id}>{`${name} | ${type} | ${address}`}</li>)}
      </ul>
      <input placeholder="이름" onChange={handleChangeInputElement} />
      <input placeholder="분류" onChange={handleChangeInputElement} />
      <input placeholder="주소" onChange={handleChangeInputElement} />
      <button
        type="button"
        onClick={handleClickAddRestaurants}
      >
        등록
      </button>
    </div>
  );
}
