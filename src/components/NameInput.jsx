export default function NameInput({ name, onChangeName }) {
  const handleChange = (event) => onChangeName(event.target.value);

  return (
    <input
      type="text"
      placeholder="이름"
      name="name"
      value={name}
      onChange={handleChange}
    />
  );
}
