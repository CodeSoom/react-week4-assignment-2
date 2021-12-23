export default function Input({
  id, placeholder, value, onChange,
}) {
  return (
    <>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
