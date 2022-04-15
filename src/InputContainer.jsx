import { useDispatch } from 'react-redux';

import { updateRestaurant } from './actions';

export default function InputContainer({
  restaurantsName, category, address, onChange, onClick,
}) {
  // const dispatch = useDispatch();
  //
  // function handleChange(event) {
  //   dispatch(updateRestaurant(event.target.value));
  // }

  return (
    <p>
      <input
        id="input-restaurants-name"
        name="name"
        type="text"
        placeholder="이름"
        value={restaurantsName}
        onChange={onChange}
      />
      <input
        id="input-restaurants-category"
        name="category"
        type="text"
        placeholder="분류"
        value={category}
        onChange={onChange}
      />
      <input
        id="input-restaurants-address"
        name="address"
        type="text"
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
