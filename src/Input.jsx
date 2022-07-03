export default function Input({
  nameInput,
  typeInput,
  adressInput,
  handleChangeRestaurantName,
  handleChangeRestaurantType,
  handleChangeRestaurantAdress,
  handleClickAddRestaurant,
}) {
  return (
    <div>
      <input type="text" placeholder="이름" value={nameInput} onChange={handleChangeRestaurantName} />
      <input type="text" placeholder="분류" value={typeInput} onChange={handleChangeRestaurantType} />
      <input type="text" placeholder="주소" value={adressInput} onChange={handleChangeRestaurantAdress} />
      <button type="button" onClick={handleClickAddRestaurant}>완료</button>
    </div>
  );
}
