import { useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

export default function RestaurantContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants?.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}
