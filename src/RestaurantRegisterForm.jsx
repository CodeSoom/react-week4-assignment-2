export default function RestaurantRegisterForm({
  name, category, address,
  onChange, onClick,
}) {
  function handleChange(event) {
    const { name: inputName, value: inputValue } = event.target;
    onChange(inputName, inputValue);
  }

  return (
    <div>
      <input
        id="input-restaurant-name"
        name="name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChange}
      />
      <input
        id="input-restaurant-category"
        name="category"
        type="text"
        placeholder="분류"
        value={category}
        onChange={handleChange}
      />
      <input
        id="input-restaurant-address"
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
