export default function RestaurantForm({ restaurant, onClick }) {
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
        onChange={() => {}}
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
