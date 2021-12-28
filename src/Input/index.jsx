export default function Input({
  id, type, required, placeholder, name, label, labelStyle, style, value, onChange,
}) {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        style={style}
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
