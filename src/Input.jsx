export default function Input({ label, value, handleChange }) {
  return (
    <>
      <label
        style={{ display: 'none' }}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
