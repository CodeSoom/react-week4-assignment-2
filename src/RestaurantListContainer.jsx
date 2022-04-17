import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

function selector(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default function RestaurantListContainer() {
  const { restaurants } = useSelector(selector);

  return (
    <RestaurantList
      restaurants={restaurants}
    />
  );
}
