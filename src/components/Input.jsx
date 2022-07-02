export default function Input(
  {
    restaurant,
    onChangeName,
    onChangeCategory,
    onChangeAddress,
    onSubmit,
  },
) {
  function handleChangeName(e) {
    onChangeName(e.target.value);
  }

  function handleChangeCategory(e) {
    onChangeCategory(e.target.value);
  }

  function handleChangeAddress(e) {
    onChangeAddress(e.target.value);
  }

  function handleSubmit() {
    onSubmit();
  }
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChangeName}
      />
      <input
        name="category"
        placeholder="분류"
        value={restaurant.category}
        onChange={handleChangeCategory}
      />
      <input
        name="address"
        placeholder="주소"
        value={restaurant.address}
        onChange={handleChangeAddress}
      />
      <button onClick={handleSubmit} type="button">등록</button>
    </div>
  );
}
