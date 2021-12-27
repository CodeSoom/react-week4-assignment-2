export default function Input({ onClick, onChange, restaurant }) {
  const { name, category, address } = restaurant;
  // container와 의존성 분리
  function handleChange(e) {
    onChange(e.target.value, e.target.name);
  }

  return (
    <p>
      <span>
        <input
          type="text"
          placeholder="이름"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <input
          type="text"
          placeholder="분류"
          name="category"
          onChange={handleChange}
          value={category}
        />
        <input
          type="text"
          placeholder="주소"
          name="address"
          onChange={handleChange}
          value={address}
        />
      </span>
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
