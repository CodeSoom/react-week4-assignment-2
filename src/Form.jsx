export default function Form({
  storeName,
  category,
  address,
  onChange,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={storeName}
        onChange={onChange}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        value={category}
        onChange={onChange}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={address}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
