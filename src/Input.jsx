export default function Input({
  label,
  value,
  name,
  handleChange,
}) {
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
        name={name}
        onChange={handleChange}
      />
    </>
  );
}
