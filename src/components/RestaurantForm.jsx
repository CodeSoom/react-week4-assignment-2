const RestaurantForm = ({
  inputValues,
  onUpdateRestaurantForm,
  onSubmitNewRestaurant,
}) => (
  <form onSubmit={onSubmitNewRestaurant}>
    <label htmlFor="input:name">이름</label>
    <input
      id="input:name"
      name="name"
      value={inputValues?.name}
      onChange={onUpdateRestaurantForm}
    />

    <label htmlFor="input:category">항목</label>
    <input
      id="input:category"
      name="category"
      value={inputValues?.category}
      onChange={onUpdateRestaurantForm}
    />

    <label htmlFor="input:location">지역</label>
    <input
      id="input:location"
      name="location"
      value={inputValues?.location}
      onChange={onUpdateRestaurantForm}
    />

    <button type="submit">등록</button>
  </form>
);

export default RestaurantForm;
