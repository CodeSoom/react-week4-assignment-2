export default function Input({
  name, placeholder, valueText, onChange,
}) {
  function handleChange(event) {
    const { value } = event.target;
    onChange(value);
  }

  return (
    <input name={name} placeholder={placeholder} value={valueText} onChange={handleChange} />
  );
}
