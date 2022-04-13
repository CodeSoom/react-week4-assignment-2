export default function RestaurantNameInput({ value, onChange }) {
  function handleChange(event) {
    const { value: inputName } = event.target;
    onChange(inputName);
  }
  return (
    <input
      id="input-restaurant-name"
      type="text"
      placeholder="이름"
      value={value}
      onChange={handleChange}
    />
  );
}
