import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    newName: '',
    newCategory: '',
    newAddress: '',
    restaurants: [
    ],
  });

  const {
    newId, newName, newCategory, newAddress, restaurants,
  } = state;

  function renderRestaurantList(restaurant) {
    const {
      id, name, category, address,
    } = restaurant;

    return (
      <li key={id}>
        {`${name} | ${category} | ${address}`}
      </li>
    );
  }

  function handleChangeInput(type, value) {
    setState({
      ...state,
      [type]: value,
    });
  }

  function handleClickAddRestaurant() {
    setState({
      ...state,
      newId: newId + 1,
      newName: '',
      newCategory: '',
      newAddress: '',
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name: newName,
          category: newCategory,
          address: newAddress,
        },
      ],
    });
  }

  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {
          restaurants.map((restaurant) => renderRestaurantList(restaurant))
        }
      </ul>
      <form>
        <input
          id="input-restaurant-name"
          name="name"
          type="text"
          placeholder="이름"
          value={state.newName}
          onChange={(event) => handleChangeInput('newName', event.target.value)}
        />
        <input
          id="input-restaurant-category"
          name="category"
          type="text"
          placeholder="분류"
          value={state.newCategory}
          onChange={(event) => handleChangeInput('newCategory', event.target.value)}
        />
        <input
          id="input-restaurant-address"
          name="address"
          type="text"
          placeholder="주소"
          value={state.newAddress}
          onChange={(event) => handleChangeInput('newAddress', event.target.value)}
        />
        <button
          type="button"
          onClick={handleClickAddRestaurant}
        >
          등록
        </button>
      </form>
    </>
  );
}
