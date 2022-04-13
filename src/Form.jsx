export default function Form({
  value,
  onChange,
  onClick,
}) {
  function handleChange(event) {
    const { name, value: changedValue } = event.target;

    if (name === 'name') {
      onChange({ restaurantName: changedValue });
    }

    if (name === 'category') {
      onChange({ restaurantCategory: changedValue });
    }

    if (name === 'address') {
      onChange({ restaurantAddress: changedValue });
    }
  }

  const { name, category, address } = value;

  return (
    <p>
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
    </p>
  );
}
