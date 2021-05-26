import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

function addRestaurants() {
  return {
    type: 'addRestaurants',
  };
}

function changeName(value) {
  return {
    type: 'changeName',
    payload: {
      value,
    },
  };
}

function changeType(value) {
  return {
    type: 'changeType',
    payload: {
      value,
    },
  };
}

function changeAddress(value) {
  return {
    type: 'changeAddress',
    payload: {
      value,
    },
  };
}

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  const handleClickAddRestaurants = () => {
    dispatch(addRestaurants());
  };

  const handleChangeName = (value) => {
    dispatch(changeName(value));
  };

  const handleChangeType = (value) => {
    dispatch(changeType(value));
  };

  const handleChangeAddress = (value) => {
    dispatch(changeAddress(value));
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(({
          id, name, type, address,
        }) => <li key={id}>{`${name} | ${type} | ${address}`}</li>)}
      </ul>
      <input
        placeholder="이름"
        onChange={(event) => handleChangeName(event.target.value)}
      />
      <input
        placeholder="분류"
        onChange={(event) => handleChangeType(event.target.value)}
      />
      <input
        placeholder="주소"
        onChange={(event) => handleChangeAddress(event.target.value)}
      />
      <button
        type="button"
        onClick={handleClickAddRestaurants}
      >
        등록
      </button>
    </div>
  );
}
