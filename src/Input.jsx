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
      <label htmlFor="input-restaurnat-name">
        이름
      </label>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChangeName}
      />

      <label htmlFor="input-restaurnat-food">
        분류
      </label>
      <input
        type="text"
        placeholder="분류"
        value={food}
        onChange={handleChangeFood}
      />

      <label htmlFor="input-restaurnat-location">
        주소
      </label>
      <input
        type="text"
        placeholder="주소"
        value={location}
        onChange={handleChangeLocation}
      />
    </div>
  );
}
