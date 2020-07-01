import React, { useState } from 'react';

const initialState = {
  restaurants: [],
  restaurant: {
    id: 0,
    name: '',
    category: '',
    address: '',
  },
};

export default function App() {
  const [state, setState] = useState(initialState);

  function updateRestaurantInfo(property, value) {
    setState({
      ...state,
      restaurant: {
        ...state.restaurant,
        [property]: value,
      },
    });
  }

  function handleInputRestaurantName(ev) {
    updateRestaurantInfo('name', ev.target.value);
  }

  function handleInputRestaurantCategory(ev) {
    updateRestaurantInfo('category', ev.target.value);
  }

  function handleInputRestaurantAddress(ev) {
    updateRestaurantInfo('address', ev.target.value);
  }

  function handleAddRestaurant() {
    const { restaurants, restaurant } = state;
    setState({
      ...state,
      restaurants: [...restaurants, restaurant],
      restaurant: {
        id: restaurant.id + 1,
        name: '',
        category: '',
        address: '',
      },
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ol>
        {
          state.restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))
        }
      </ol>
      <input type="text" id="name" value={state.restaurant.name} onChange={handleInputRestaurantName} />
      <input type="text" id="category" value={state.restaurant.category} onChange={handleInputRestaurantCategory} />
      <input type="text" id="address" value={state.restaurant.address} onChange={handleInputRestaurantAddress} />
      <button type="button" onClick={handleAddRestaurant}>등록</button>
    </div>
  );
}
