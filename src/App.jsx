import React, { useState } from 'react';

const initialState = {
  newId: 1,
  newRestaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

function changeRestuarant(state, field, value) {
  const { newRestaurant } = state;

  newRestaurant[field] = value;

  return {
    ...state,
    newRestaurant,
  };
}

function saveNewRestaurant(state) {
  const {
    newId, newRestaurant, restaurants,
  } = state;

  return {
    newId: newId + 1,
    newRestaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [
      ...restaurants,
      {
        id: newId,
        ...newRestaurant,
      },
    ],
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  function handleChange(event) {
    setState(changeRestuarant(
      state,
      event.target.name,
      event.target.value,
    ));
  }

  function handleClickSubmit(event) {
    event.preventDefault();
    setState(saveNewRestaurant(state));
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {
          state.restaurants.map((restuarant) => (
            <li key={restuarant.id}>
              {`${restuarant.name} | ${restuarant.category} | ${restuarant.address}`}
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleClickSubmit}>
        <input
          type="text"
          name="name"
          value={state.newRestaurant.name}
          placeholder="이름"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={state.newRestaurant.name}
          placeholder="분류"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={state.newRestaurant.address}
          placeholder="주소"
          onChange={handleChange}
        />
        <input type="submit" value="등록" />
      </form>
    </div>
  );
}
