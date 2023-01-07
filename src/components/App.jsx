import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsFormContainer from './RestaurantsFormContainer';

export default function App() {
  return (
    <div>
      <header>
        <h1>Restaurants</h1>
      </header>

      <RestaurantsContainer />
      <RestaurantsFormContainer />
    </div>
  );
}
