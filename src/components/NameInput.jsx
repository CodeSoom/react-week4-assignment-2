export default function NameInput({ name, onChangeName }) {
  return (
    <input type="text" placeholder="이름" value={name} onChange={onChangeName} />
  );
}
