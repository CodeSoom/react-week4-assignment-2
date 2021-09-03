export default function Input({
  ariaLabel, value, handleChange, placeholder,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={handleChange}
    />
  );
}
