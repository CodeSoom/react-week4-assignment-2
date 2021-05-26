import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

function addRestaurants() {
  // TODO:
}

function changeInputValue(value) {
  // TODO:
}

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  const handleClickAddRestaurants = () => {
    dispatch(addRestaurants());
  };

  const handleChangeInputElement = (value) => {
    dispatch(changeInputValue(value));
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
