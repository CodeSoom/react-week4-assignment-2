import { useState } from 'react';
import Input from './Input';

export default function App() {
  const [restaurant, setRestaurant] = useState({
    name: '',
    category: '',
    address: '',
  });

  const handleChangeRestaurant = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  }

  const handleClickAddButton = () => {

  }

  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        restaurant={restaurant}
        onChange={handleChangeRestaurant}
        onClick={handleClickAddButton}
      />
    </div>
  );
}
