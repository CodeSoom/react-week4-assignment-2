export default function Input({
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
}
