import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <li data-testid="restaurants-list" />
      <RestaurantNameInput />
      <RestaurantCategoryInput />
      <RestaurantAddressInput />
      <button type="button">등록</button>
    </div>
  );
}
