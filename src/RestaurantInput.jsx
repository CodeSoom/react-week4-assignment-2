export default function RestaurantInput({
  id, name, placeholder, value, onChange,
}) {
  return (
    <input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
