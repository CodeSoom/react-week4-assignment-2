export default function Form({
  value,
  onChange,
  onClick,
}) {
  const { name, category, address } = value;

  function handleChange(event) {
    const { name: inputName, value: inputValue } = event.target;

    onChange({ restaurantInformation: { ...value, [inputName]: inputValue } });
  }
  return (
    <p>
      <input
        id="input-restaurant-name"
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChange}
      />
      <input
        id="input-restaurant-category"
        type="text"
        name="category"
        placeholder="분류"
        value={category}
        onChange={handleChange}
      />
      <input
        id="input-restaurant-address"
        type="text"
        name="address"
        placeholder="주소"
        value={address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
