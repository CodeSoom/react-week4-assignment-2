export default function RestaurantInput({
  id, name, placeholder, value, onChange,
}) {
  function handleChange(event) {
    const { name: inputName, value: changedValue } = event.target;

    if (inputName === 'name') {
      onChange({ restaurantName: changedValue });
    }

    if (inputName === 'category') {
      onChange({ restaurantCategory: changedValue });
    }

    if (inputName === 'address') {
      onChange({ restaurantAddress: changedValue });
    }
  }

  return (
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
