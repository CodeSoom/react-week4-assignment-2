export default function Input({
  onChange, name, placeholder, value,
}) {
  return (
    <input type="text" name={name} placeholder={placeholder} onChange={onChange} value={value} />
  );
}
