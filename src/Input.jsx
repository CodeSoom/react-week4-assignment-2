export default function Input({
  restaurant, onChange, onClick,
}) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="category"
        type="text"
        placeholder="분류"
        onChange={onChange}
        value={category}
      />
      <input
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
