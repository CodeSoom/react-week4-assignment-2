export default function Input(
  name,
  food,
  location,
  handleChangeName,
  handleChangeFood,
  handleChangeLocation,
) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name={name}
        handleChangeName={handleChangeName}
      />
      <input
        type="text"
        placeholder="분류"
        food={food}
        handleChangeFood={handleChangeFood}
      />
      <input
        type="text"
        placeholder="주소"
        location={location}
        handleChangeLocation={handleChangeLocation}
      />
    </div>
  );
}
