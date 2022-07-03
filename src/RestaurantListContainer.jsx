import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

const RestaurantListContainer = () => {
  const restaurants = useSelector((state) => state.restaurants);

  return <RestaurantList restaurants={restaurants} />;
};

export default RestaurantListContainer;
