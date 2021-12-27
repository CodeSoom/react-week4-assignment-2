export default function RestaurantForm({
  restaurantInfo: { name, address, category },
  onSubmitForm,
  onChangeInput,
}) {
  return (
    <form onSubmit={onSubmitForm}>
      <input
        onChange={onChangeInput}
        value={name}
        type="text"
        placeholder="이름"
        name="name"
      />
      <input
        onChange={onChangeInput}
        value={category}
        type="text"
        placeholder="분류"
        name="category"
      />
      <input
        onChange={onChangeInput}
        value={address}
        type="text"
        placeholder="주소"
        name="address"
      />
      <button type="submit">등록</button>
    </form>
  );
}
