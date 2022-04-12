export default function Input({
  onClick,
}) {
  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />

      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
