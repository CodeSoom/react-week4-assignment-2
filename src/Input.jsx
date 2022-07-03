export default function Input({
  restaurantName,
  restaurantType,
  restaurantAdress,
  handleChangeRestaurantName,
  handleChangeRestaurantType,
  handleChangeRestaurantAdress,
  handleClickAddRestaurant,
}) {
  return (
    <div>
      <input type="text" placeholder="이름" value={restaurantName} onChange={handleChangeRestaurantName} />
      <input type="text" placeholder="분류" value={restaurantType} onChange={handleChangeRestaurantType} />
      <input type="text" placeholder="주소" value={restaurantAdress} onChange={handleChangeRestaurantAdress} />
      <button type="button" onClick={handleClickAddRestaurant}>등록</button>
    </div>
  );
}
