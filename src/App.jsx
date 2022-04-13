import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <li data-testid="restaurants-list" />
      <RestaurantNameInput />
      <RestaurantCategoryInput />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
