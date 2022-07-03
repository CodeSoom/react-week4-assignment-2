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
      <input type="text" name="restaurantName" placeholder="이름" value={restaurantName} onChange={handleChangeRestaurantName} />
      <input type="text" name="restaurantType" placeholder="분류" value={restaurantType} onChange={handleChangeRestaurantType} />
      <input type="text" name="restaurantAdress" placeholder="주소" value={restaurantAdress} onChange={handleChangeRestaurantAdress} />
      <button type="button" onClick={handleClickAddRestaurant}>등록</button>
    </div>
  );
}
