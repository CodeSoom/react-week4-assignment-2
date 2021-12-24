export default function Input({ onClick, onChange }) {
  return (
    <p>
      <span>
        <input
          id="restaurant-name"
          type="text"
          placeholder="이름"
          onChange={onChange}
        />
        <input id="restaurant-type" type="text" placeholder="분류" />
        <input id="restaurant-address" type="text" placeholder="주소" />
      </span>
      <button onClick={onClick}>등록</button>
    </p>
  );
}
