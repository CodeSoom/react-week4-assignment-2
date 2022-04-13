import FormContainer from './FormContainer';
import RestaurantListContainer from './RestaurantListContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <FormContainer />
    </div>
  );
}
