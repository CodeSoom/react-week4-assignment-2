import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantForm';

export default function App() {
  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </>
  );
}
