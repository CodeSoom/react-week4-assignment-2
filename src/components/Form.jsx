export default function Form({
  restaurant,
  onChange,
  onClick,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor="input-restaurant-name">이름</label>
      <input
        id="input-restaurant-name"
        name="name"
        placeholder="이름"
        value={restaurant.name}
        onChange={handleChange}
      />
      <label htmlFor="input-restaurant-category">분류</label>
      <input
        id="input-restaurant-category"
        name="category"
        placeholder="분류"
        value={restaurant.category}
        onChange={handleChange}
      />
      <label htmlFor="input-restaurant-address">주소</label>
      <input
        id="input-restaurant-address"
        name="address"
        placeholder="주소"
        value={restaurant.address}
        onChange={handleChange}
      />

      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
