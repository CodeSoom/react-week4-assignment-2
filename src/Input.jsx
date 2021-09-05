export default function Input({
  inputName, placeholder, valueText, onChange,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange(name, value);
  }

  return (
    <input name={inputName} placeholder={placeholder} value={valueText} onChange={handleChange} />
  );
}
