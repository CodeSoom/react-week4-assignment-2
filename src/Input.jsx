export default function Input({
  name, category, address,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        value={name}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
      />
      <button type="button">
        등록
      </button>
    </form>
  );
}
