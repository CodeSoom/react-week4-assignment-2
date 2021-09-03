export default function Input({
  ariaLabel, value, handleChange, placeholder, inputName,
}) {
  return (
    <input
      type="text"
      name={inputName}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={handleChange}
    />
  );
}
