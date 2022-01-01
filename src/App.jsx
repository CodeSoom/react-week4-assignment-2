import InputContainer from './components/input/InputContainer';
import RestaurantsContainer from './components/restaurants/RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <InputContainer />
    </div>
  );
}
