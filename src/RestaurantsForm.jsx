export default function RestaurantsForm({ restaurant, onClick }) {
  const { name, category, location } = restaurant;
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={() => {}}
      />
      <input
        type="text"
        name="category"
        value={category}
        onChange={() => {}}
      />
      <input
        type="text"
        name="location"
        value={location}
        onChange={() => {}}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
