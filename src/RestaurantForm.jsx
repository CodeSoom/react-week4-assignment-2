export default function RestaurantForm({
  restaurant,
  onClick,
  onChange,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        onChange={() => {}}
      />
      <input
        type="text"
        name="category"
        value={restaurant.category}
        onChange={() => {}}
      />
      <input
        type="text"
        name="address"
        value={restaurant.address}
        onChange={onChange}
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
