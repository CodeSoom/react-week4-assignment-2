import { useSelector } from 'react-redux';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((select) => ({
    restaurants: select.restaurants,
  }));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
