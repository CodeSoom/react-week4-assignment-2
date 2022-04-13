export default function RestaurantCategoryInput({ value, onChange }) {
  function handleChange(event) {
    const { value: categoryInput } = event.target;
    onChange(categoryInput);
  }

  return (
    <input
      id="input-restaurant-category"
      type="text"
      placeholder="분류"
      value={value}
      onChange={handleChange}
    />
  );
}
