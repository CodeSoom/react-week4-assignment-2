import { useState } from 'react';
import Input from './Input';

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
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
  };

  const handleClickAddButton = () => {
    setRestaurants([
      ...restaurants,
      restaurant,
    ]);

    setRestaurant({
      name: '',
      category: '',
      address: '',
    });
  };

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
