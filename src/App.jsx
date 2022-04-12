export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
      />
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
