export default function RestaurantNameInput({ value, onChange }) {
  return (
    <input
      id="input-restaurant-name"
      type="text"
      placeholder="이름"
      value={value}
      onChange={onChange}
    />
  );
}
