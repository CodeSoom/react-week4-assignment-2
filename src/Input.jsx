export default function Input({
  value1, value2, value3, onChange, onClick,
}) {
  return (
    <p>
      <label htmlFor="input-restaurants-title">
        이름
      </label>
      <label htmlFor="input-restaurants-classification">
        분류
      </label>
      <label htmlFor="input-restaurants-address">
        주소
      </label>
      <input
        id="input-restaurants-title"
        type="text"
        placeholder="이름"
        value={value1}
        onChange={onChange}
      />
      <input
        id="input-restaurants-classification"
        type="text"
        placeholder="분류"
        value={value2}
        onChange={onChange}
      />
      <input
        id="input-restaurants-address"
        type="text"
        placeholder="주소"
        value={value3}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
