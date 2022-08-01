import { useDispatch, useSelector } from 'react-redux';

import {
  changeNewRestaurant,
  addRestaurant,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  function selector(state) {
    return {
      name: state.name,
      category: state.category,
      address: state.address,
    };
  }

  const {
    name,
    category,
    address,
  } = useSelector(selector);

  function handleChangeRestaurant({ inputName, input }) {
    dispatch(changeNewRestaurant({ inputName, input }));
  }

  function submitNewRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <form>
      <Input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeRestaurant}
      />
      <Input
        type="text"
        name="category"
        placeholder="분류"
        value={category}
        onChange={handleChangeRestaurant}
      />
      <Input
        type="text"
        name="address"
        placeholder="주소"
        value={address}
        onChange={handleChangeRestaurant}
      />
      <button type="button" onClick={submitNewRestaurant}>등록</button>
    </form>
  );
}
