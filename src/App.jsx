import RestaurantList from './RestaurantList';
import TextBox from './TextBox';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
      <TextBox />
    </div>
  );
}
