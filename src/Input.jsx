export default function Input({ restautrant }) {
  const { name, type, address } = restautrant;

  return (
    <>
      <input placeholder="이름" value={name} />
      <input placeholder="분류" value={type} />
      <input placeholder="주소" value={address} />
      <button>추가</button>
    </>
  );
}
