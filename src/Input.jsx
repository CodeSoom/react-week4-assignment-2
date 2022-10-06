export default function Input({
  label,
  value,
  name,
  onChange,
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
        onChange={onChange}
      />
    </>
  );
}
