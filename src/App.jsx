import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantsContainer />

      <input type="text" id="name" />
      <input type="text" id="category" />
      <input type="text" id="location" />
      <button type="button">등록</button>
    </div>
  );
}
