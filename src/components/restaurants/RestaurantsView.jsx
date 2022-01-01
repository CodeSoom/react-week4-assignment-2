import RestaurantView from '../restaurant/RestaurantView';

export default function RestaurantsView({ restaurants }) {
  return (
    <ol>
      {restaurants.map((restaurant) => (
        <RestaurantView
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ol>
  );
}
