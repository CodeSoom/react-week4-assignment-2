const RestaurantForm = ({
  restaurant,
  onChangeName,
  onChangeType,
  onChangeAddress,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <input
      placeholder="이름"
      value={restaurant.name}
      onChange={onChangeName}
    />
    <input
      placeholder="분류"
      value={restaurant.type}
      onChange={onChangeType}
    />
    <input
      placeholder="주소"
      value={restaurant.address}
      onChange={onChangeAddress}
    />
    <button type="submit">등록</button>
  </form>
);

export default RestaurantForm;
