export default function RestaurantForm({
  restaurant,
  onClick,
  onChange,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
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
    </div>
  );
}
