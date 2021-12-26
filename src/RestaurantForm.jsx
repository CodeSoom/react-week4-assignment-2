export default function RestaurantForm({
  restaurant,
  onChange,
  onClick,
}) {
  function handleChange(event) {
    const { target: { value, name } } = event;

    onChange({ name, value });
  }

  return (
    <span>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        value={restaurant.address}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </span>
  );
}
