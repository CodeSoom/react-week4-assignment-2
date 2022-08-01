export default function Input({
  name,
  placeholder,
  value,
  onChange,
}) {
  function handleChange(e) {
    return onChange({ inputName: name, input: e.target.value });
  }

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
