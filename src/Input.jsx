export default function RestaurantInfoInput({
  onChanges, onClick,
  info,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={onChanges.handleChangeNameValue}
        value={info.name}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        onChange={onChanges.handleChangeCategroryValue}
        value={info.category}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        onChange={onChanges.handleChangeAddressValue}
        value={info.address}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
