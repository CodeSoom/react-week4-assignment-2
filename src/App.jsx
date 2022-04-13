import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList />
      <RestaurantNameInput />
      <RestaurantCategoryInput />
      <RestaurantAddressInput />
      <button type="button">등록</button>
    </div>
  );
}
