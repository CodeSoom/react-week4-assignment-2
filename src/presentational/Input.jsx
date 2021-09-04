export default function Input({
  ariaLabel, value, onChange, placeholder, name,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={handleChange}
    />
  );
}
