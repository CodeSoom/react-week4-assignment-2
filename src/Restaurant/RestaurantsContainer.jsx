import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

const RestaurantsContainer = () => {
  const restaurants = useSelector((store) => store.restaurants);
  return (
    <Restaurants restaurants={restaurants} />
  );
};

export default RestaurantsContainer;
