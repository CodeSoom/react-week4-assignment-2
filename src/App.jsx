export default function App() {
  return (
    <>
      <h1>
        Restaurants
      </h1>
      <input
        type="text"
        placeholder="이름"
        aria-label="restaurantName"
      />
      <input
        type="text"
        placeholder="분류"
        aria-label="restaurantCategory"
      />
      <input
        type="text"
        placeholder="주소"
        aria-label="restaurantAddress"
      />
      <button type="button">
        등록
      </button>
    </>
  );
}
