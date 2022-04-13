import RestaurantNameInput from './RestaurantNameInput';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <li data-testid="restaurants-list" />
      <RestaurantNameInput />
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
      />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
