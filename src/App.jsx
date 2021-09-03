import { useState } from 'react';

import Input from './Input';

export default function App() {
  const [state, setState] = useState({
    name: '',
    food: '',
    location: '',
  });

  const { name, food, location } = state;

  function handleChangeName(event) {
    const { value } = event.target;

    setState({
      ...state,
      name: value,
    });
  }

  function handleChangeFood(event) {
    const { value } = event.target;

    setState({
      ...state,
      food: value,
    });
  }

  function handleChangeLocation(event) {
    const { value } = event.target;

    setState({
      ...state,
      location: value,
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        name={name}
        food={food}
        location={location}
        handleChangeName={handleChangeName}
        handleChangeFood={handleChangeFood}
        handleChangeLocation={handleChangeLocation}
      />
    </div>
  );
}
