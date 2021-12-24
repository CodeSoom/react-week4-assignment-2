import { useSelector } from 'react-redux';
import RestaurantList from './RestaurantList';

export default function RestaurantListContainer() {
  const { restaurants } = useSelector((store) => store);
  return (
    <RestaurantList restaurants={restaurants} />
  );
}
