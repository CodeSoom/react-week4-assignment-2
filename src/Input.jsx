export default function Input({
  name, placeholder, value, onChange,
}) {
  return (
    <input name={name} placeholder={placeholder} value={value} onChange={onChange} />
  );
}
