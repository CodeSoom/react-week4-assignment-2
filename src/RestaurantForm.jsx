export default function RestaurantForm({
  restaurant,
  onClick,
}) {
  return (
    <div>
      <input value={restaurant.name} />
      <input value={restaurant.category} />
      <input value={restaurant.address} />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
