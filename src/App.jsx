import React, { useState } from 'react';

const initialState = {
  newId: 1,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

function changeName(state, name) {
  return {
    ...state,
    name,
  };
}

function changeCategory(state, category) {
  return {
    ...state,
    category,
  };
}

function changeAddress(state, address) {
  return {
    ...state,
    address,
  };
}

function clickSubmit(state) {
  const {
    newId, name, category, address, restaurants,
  } = state;

  return {
    newId: newId + 1,
    name: '',
    category: '',
    address: '',
    restaurants: [
      ...restaurants,
      {
        id: newId, name, category, address,
      },
    ],
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  function handleChangeName(event) {
    setState(changeName(state, event.target.value));
  }

  function handleChangeCategory(event) {
    setState(changeCategory(state, event.target.value));
  }

  function handleChangeAddress(event) {
    setState(changeAddress(state, event.target.value));
  }

  function handleClickSubmit(event) {
    event.preventDefault();
    setState(clickSubmit(state));
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
          value={state.name}
          placeholder="이름"
          onChange={handleChangeName}
        />
        <input
          type="text"
          name="category"
          value={state.category}
          placeholder="분류"
          onChange={handleChangeCategory}
        />
        <input
          type="text"
          name="address"
          value={state.address}
          placeholder="주소"
          onChange={handleChangeAddress}
        />
        <input type="submit" value="등록" />
      </form>
    </div>
  );
}
