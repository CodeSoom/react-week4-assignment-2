export default function Input({
  restaurantName,
  restaurantType,
  restaurantAdress,
  onChangeRestaurantName,
  onChangeRestaurantType,
  onChangeRestaurantAdress,
  onClickAddRestaurant,
}) {
  return (
    <div>
      <input type="text" name="restaurantName" placeholder="이름" value={restaurantName} onChange={onChangeRestaurantName} />
      <input type="text" name="restaurantType" placeholder="분류" value={restaurantType} onChange={onChangeRestaurantType} />
      <input type="text" name="restaurantAdress" placeholder="주소" value={restaurantAdress} onChange={onChangeRestaurantAdress} />
      <button type="button" onClick={onClickAddRestaurant}>등록</button>
    </div>
  );
}
