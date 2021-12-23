export default function RestaurantInfoInput({
  onNameChange, onCategoryChange, onAddressChange, onClick,
  name, category, address,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={onNameChange}
        value={name}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        onChange={onCategoryChange}
        value={category}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        onChange={onAddressChange}
        value={address}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
