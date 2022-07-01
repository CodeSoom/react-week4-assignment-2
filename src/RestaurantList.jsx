import Restaurant from './Restaurant';

const RestaurantList = ({
  restaurants,
}) => (
  <ol>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
      />
    ))}
  </ol>
);

export default RestaurantList;
