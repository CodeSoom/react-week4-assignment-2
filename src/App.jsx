import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      {/* <form>
        <input
          id="input-restaurant-name"
          name="name"
          type="text"
          placeholder="이름"
          value={state.newName}
          onChange={(event) => handleChangeInput('newName', event.target.value)}
        />
        <input
          id="input-restaurant-category"
          name="category"
          type="text"
          placeholder="분류"
          value={state.newCategory}
          onChange={(event) => handleChangeInput('newCategory', event.target.value)}
        />
        <input
          id="input-restaurant-address"
          name="address"
          type="text"
          placeholder="주소"
          value={state.newAddress}
          onChange={(event) => handleChangeInput('newAddress', event.target.value)}
        />
        <button
          type="button"
          onClick={handleClickAddRestaurant}
        >
          등록
        </button>
      </form> */}
    </>
  );
}
