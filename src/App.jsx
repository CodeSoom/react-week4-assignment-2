export default function App() {
  return (
    <>
      <h1>
        Restaurants
      </h1>

      <label htmlFor="input-name">
        이름
      </label>
      <input
        id="name"
        type="text"
        placeholder="이름"
      />

      <label htmlFor="input-category">
        분류
      </label>
      <input
        id="category"
        type="text"
        placeholder="분류"
      />

      <label htmlFor="input-address">
        주소
      </label>
      <input
        id="address"
        type="text"
        placeholder="주소"
      />
    </>
  );
}
