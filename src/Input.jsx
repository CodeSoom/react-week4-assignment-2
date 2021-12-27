export default function RestaurantInfoInput({
  onChanges, onClick,
  info,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChanges(name, value);
  };
  const { name, category, address } = info;
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={handleChange}
        value={name}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        onChange={handleChange}
        value={category}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        onChange={handleChange}
        value={address}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
