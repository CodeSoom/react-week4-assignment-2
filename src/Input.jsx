export default function Input({ restautrant, onChange }) {
  const { name, type, address } = restautrant;

  return (
    <>
      <input
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input
        placeholder="분류"
        value={type}
        onChange={onChange}
      />
      <input
        placeholder="주소"
        value={address}
        onChange={onChange}
      />
      <button type="button">추가</button>
    </>
  );
}
