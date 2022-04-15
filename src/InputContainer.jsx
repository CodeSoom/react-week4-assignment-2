export default function InputContainer({ value, onChange, onClick }) {
  return (
    <p>
      <input
        id="input-restaurants-name"
        type="text"
        placeholder="이름"
        value="아비꼬"
        onChange={onChange}
      />
      <input
        id="input-restaurants-category"
        type="text"
        placeholder="분류"
        value="일식"
        onChange={onChange}
      />
      <input
        id="input-restaurants-address"
        type="text"
        placeholder="주소"
        value="포항시"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </p>
  );
}
