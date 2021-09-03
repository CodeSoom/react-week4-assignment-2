export default function Form(props) {
  const {
    name,
    category,
    address,
    handleChangeName,
    handleChangeCategory,
    handleChangeAddress,
    handleClickAddRestaurant,
  } = props;

  return (
    <div>
      <label htmlFor="input-restaurant-name">이름</label>
      <input
        id="input-restaurant-name"
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeName}
      />

      <label htmlFor="input-restaurant-category">분류</label>
      <input
        id="input-restaurant-category"
        name="category"
        placeholder="분류"
        value={category}
        onChange={handleChangeCategory}
      />

      <label htmlFor="input-restaurant-address">주소</label>
      <input
        id="input-restaurant-address"
        name="address"
        placeholder="주소"
        value={address}
        onChange={handleChangeAddress}
      />

      <button type="button" onClick={handleClickAddRestaurant}>등록</button>
    </div>
  );
}
