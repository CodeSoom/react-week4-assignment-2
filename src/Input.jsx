export default function Input({ ariaLabel, value, handleChange }) {
  return (
    <input
      type="text"
      placeholder="이름"
      aria-label={ariaLabel}
      value={value}
      onChange={handleChange}
    />
  );
}
