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
        id=""
        onChange={onNameChange}
        value={name}
      />

      <input
        type="text"
        name="category"
        placeholder="분류"
        id=""
        onChange={onCategoryChange}
        value={category}
      />

      <input
        type="text"
        name="address"
        placeholder="주소"
        id=""
        onChange={onAddressChange}
        value={address}
      />

      <input
        type="button"
        value="등록"
        onClick={onClick}
      />
    </div>
  );
}
