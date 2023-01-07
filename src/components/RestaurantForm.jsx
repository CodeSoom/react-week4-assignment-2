const RestaurantForm = ({
  inputValues: { name, category, location },
  onUpdateRestaurantForm,
  onSubmitNewRestaurant,
}) => (
  <form onSubmit={onSubmitNewRestaurant}>
    <label htmlFor="input:name">이름</label>
    <input id="input:name" name="name" value={name} onChange={onUpdateRestaurantForm} />

    <label htmlFor="input:category">항목</label>
    <input id="input:category" name="category" value={category} onChange={onUpdateRestaurantForm} />

    <label htmlFor="input:location">지역</label>
    <input id="input:location" name="location" value={location} onChange={onUpdateRestaurantForm} />

    <button type="submit">등록</button>
  </form>
);

export default RestaurantForm;
