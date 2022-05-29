export default function Input({
  restaurant, onNameChange, onCategoryChange, onAddressChange, onClick,
}) {
  const { name, category, address } = restaurant;

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
      <button type="button" onClick={onClick}>
        등록
      </button>
    </form>
  );
}
