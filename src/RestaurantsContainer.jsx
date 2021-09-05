import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
