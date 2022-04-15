import { useDispatch } from 'react-redux';

import { updateRestaurant } from './actions';

export default function InputContainer({
  restaurantsName, category, address, onClick,
}) {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateRestaurant(event.target.value));
  }

  return (
    <p>
      <input
        id="input-restaurants-name"
        name="name"
        type="text"
        placeholder="이름"
        value={restaurantsName}
        onChange={handleChange}
      />
      <input
        id="input-restaurants-category"
        name="category"
        type="text"
        placeholder="분류"
        value={category}
        onChange={handleChange}
      />
      <input
        id="input-restaurants-address"
        name="address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
