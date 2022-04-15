export default function App() {
  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <input
        id="input-restaurants-name"
        type="text"
        name="name"
        placeholder="이름"
      />
      <input
        id="input-restaurants-category"
        type="text"
        name="category"
        placeholder="분류"
      />
      <input
        id="input-restaurants-address"
        type="text"
        name="address"
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
