import { useSelector } from 'react-redux';
import Item from './Item';

export default function ListContainer() {
  const restaurants = useSelector((state) => state.restaurants);
  return (
    <>
      <ul>
        {restaurants.map((restaurant) => <Item key={restaurant.id} restaurant={restaurant} />)}
      </ul>
    </>
  );
}
