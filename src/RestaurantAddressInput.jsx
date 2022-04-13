export default function RestaurantAddressInput({ value, onChange }) {
  function handleChange(event) {
    const { value: inputAddress } = event.target;
    onChange(inputAddress);
  }

  return (
    <input
      id="input-restaurant-address"
      type="text"
      placeholder="주소"
      value={value}
      onChange={handleChange}
    />
  );
}
