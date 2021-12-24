export default function Input({ onClick, onChange }) {
  //container와 의존성 분리
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <p>
      <span>
        <input
          id="restaurant-name"
          type="text"
          placeholder="이름"
          onChange={handleChange}
        />
        <input id="restaurant-type" type="text" placeholder="분류" />
        <input id="restaurant-address" type="text" placeholder="주소" />
      </span>
      <button onClick={onClick}>등록</button>
    </p>
  );
}
