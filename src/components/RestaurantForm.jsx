const RestaurantForm = ({ inputValues: { name }, onUpdateRestaurantForm }) => (
  <form>
    <label htmlFor="input:name">이름</label>
    <input id="input:name" name="name" value={name} onChange={onUpdateRestaurantForm} />
    <input />
    <input />

    <button type="button">등록</button>
  </form>
);

export default RestaurantForm;
