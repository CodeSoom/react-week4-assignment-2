import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant } from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();
  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }
  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button" onClick={handleAddRestaurant}>등록</button>
    </div>
  );
}
