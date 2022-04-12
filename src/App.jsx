export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>

      <label htmlFor="input-restaurant-name">이름</label>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
      />
      <label htmlFor="input-restaurant-category">분류</label>
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
      />
      <label htmlFor="input-restaurant-address">주소</label>
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
      />
    </div>
  );
}
