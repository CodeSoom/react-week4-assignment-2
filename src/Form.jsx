export default function Form({
  value,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onClick,
}) {
  function handleChangeName(event) {
    onChangeName(event.target.value);
  }

  function handleChangeCategory(event) {
    onChangeCategory(event.target.value);
  }

  function handleChangeAddress(event) {
    onChangeAddress(event.target.value);
  }

  const { name, category, address } = value;

  return (
    <p>
      <input
        id="input-restaurant-name"
        name="name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChangeName}
      />
      <input
        id="input-restaurant-category"
        name="category"
        type="text"
        placeholder="분류"
        value={category}
        onChange={handleChangeCategory}
      />
      <input
        id="input-restaurant-address"
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleChangeAddress}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
