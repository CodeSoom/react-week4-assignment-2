import RestaurantInput from './RestaurantInput';

export default function Form({
  value,
  onChange,
  onClick,
}) {
  const { name, category, address } = value;

  return (
    <p>
      <RestaurantInput
        id="input-restaurant-name"
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <RestaurantInput
        id="input-restaurant-category"
        name="category"
        placeholder="분류"
        value={category}
        onChange={onChange}
      />
      <RestaurantInput
        id="input-restaurant-address"
        name="address"
        placeholder="주소"
        value={address}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
