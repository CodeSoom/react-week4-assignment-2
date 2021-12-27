export default function RestaurantForm({ restaurant, onChange, onClick }) {
  function handleChange(event) {
    const {
      target: { value, name },
    } = event;

    onChange({ name, value });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={restaurant.address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
