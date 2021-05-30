export default function RestaurantsForm({ restaurant, onChange, onClick }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({
      [name]: value,
    });
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
        name="location"
        value={restaurant.location}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
