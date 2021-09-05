import { useState } from 'react';

import ListContainer from './Container/List/ListContainer';
import Register from './Container/Register/Register';

export default function App() {
  const [state, setState] = useState({
    restaurants: [],
    name: '',
    category: '',
    address: '',
  });
  const {
    name, category, address,
  } = state;

  const handleChange = (inputType) => (event) => {
    setState({
      ...state,
      [inputType]: event.target.value,
    });
  };

  const handleClick = () => {
    const newRestaurant = { name, category, address };

    setState({
      ...state,
      restaurants: [...state.restaurants, newRestaurant],
      name: '',
      category: '',
      address: '',
    });
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <Register
        name={name}
        category={category}
        address={address}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </div>
  );
}
