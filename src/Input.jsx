export default function Input({ onClick, onChange }) {
  // container와 의존성 분리
  function handleChange(e) {
    onChange(e.target.value, e.target.dataset.indexname);
  }

  return (
    <p>
      <span>
        <input
          className="restaurant-inputs"
          type="text"
          placeholder="이름"
          data-indexname="name"
          onChange={handleChange}
        />
        <input
          className="restaurant-inputs"
          type="text"
          placeholder="분류"
          data-indexname="type"
          onChange={handleChange}
        />
        <input
          className="restaurant-inputs"
          type="text"
          placeholder="주소"
          data-indexname="address"
          onChange={handleChange}
        />
      </span>
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
