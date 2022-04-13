export default function Inputs({
  onChangeName, onChangeCategory, onChangeAddress, addRestaurant,
}) {
  function handleChangeRestaurantName(event) {
    onChangeName(event.target.value);
  }

  function handleChangeRestaurantCategory(event) {
    onChangeCategory(event.target.value);
  }

  function handleChangeRestaurantAddress(event) {
    onChangeAddress(event.target.value);
  }

  return (
    <div>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
        onChange={handleChangeRestaurantName}
      />
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
        onChange={handleChangeRestaurantCategory}
      />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
        onChange={handleChangeRestaurantAddress}
      />
      <button
        type="button"
        onClick={addRestaurant}
      >
        등록
      </button>
    </div>
  );
}
