export default function Input() {
  return (
    <p>
      <span>
        <label htmlFor="restaurant-name">
          <input id="restaurant-name" type="text" placeholder="이름" />
        </label>
        <label htmlFor="restaurant-type">
          <input id="restaurant-type" type="text" placeholder="분류" />
        </label>
        <label htmlFor="restaurant-address">
          <input id="restaurant-address" type="text" placeholder="주소" />
        </label>
      </span>
      <button>등록</button>
    </p>
  );
}
