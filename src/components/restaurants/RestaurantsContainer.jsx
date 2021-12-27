import { useSelector } from 'react-redux';
import RestaurantsView from './RestaurantsView';

export default function RestaurantsContainer() {
  const restaurants = useSelector((state) => state.restaurants);

  return (
    <RestaurantsView
      restaurants={restaurants}
    />
  );
}
