export default function RestaurantInput({
  valueName,
  valueCategory,
  valueAddress,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  return (
    <>
      <label htmlFor="input-restaurant-name">
        <input
          id="input-restaurant-name"
          type="text"
          placeholder="이름"
          value={valueName}
          onChange={onChangeName}
        />
      </label>
      <label htmlFor="input-restaurant-category">
        <input
          id="input-restaurant-category"
          type="text"
          placeholder="분류"
          value={valueCategory}
          onChange={onChangeCategory}
        />
      </label>
      <label htmlFor="input-restaurant-address">
        <input
          id="input-restaurant-address"
          type="text"
          placeholder="주소"
          value={valueAddress}
          onChange={onChangeAddress}
        />
      </label>
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
}
