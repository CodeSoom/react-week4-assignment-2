export default function Input({
  name, category, address, onNameChange, onCategoryChange, onAddressChange,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={onCategoryChange}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={onAddressChange}
      />
      <button type="button">
        등록
      </button>
    </form>
  );
}
