export default function RestaurantForm({
  restaurantInfo: { name, address, category },
  onSubmitForm,
  onChangeInput,
}) {
  const handleInputChange = ({ target }) => {
    onChangeInput(target.name, target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInputChange}
        value={name}
        type="text"
        placeholder="이름"
        name="name"
      />
      <input
        onChange={handleInputChange}
        value={category}
        type="text"
        placeholder="분류"
        name="category"
      />
      <input
        onChange={handleInputChange}
        value={address}
        type="text"
        placeholder="주소"
        name="address"
      />
      <button type="submit" name="등록">
        등록
      </button>
    </form>
  );
}
