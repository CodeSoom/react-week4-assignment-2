import RestaurantFormContainer from './RestaurantFormContainer';
import RestaurantListContainer from './RestaurantListContainer';

export default function App() {
  return (
    <section>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantFormContainer />
    </section>
  );
}
