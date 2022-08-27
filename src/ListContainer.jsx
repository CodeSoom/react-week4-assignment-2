import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <List key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}
