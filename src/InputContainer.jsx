import { useDispatch, useSelector } from 'react-redux';
import {
  addAddress, addName, addRestaurant, addSort,
} from './action';

export default function InputContainer() {
  const { name, sort, address } = useSelector((state) => ({
    name: state.name,
    sort: state.sort,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChangeName(e) {
    dispatch(addName(e.target.value));
  }

  function handleChangeSort(e) {
    dispatch(addSort(e.target.value));
  }

  function handleChangeAddress(e) {
    dispatch(addAddress(e.target.value));
  }

  function handleClickButton() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <input placeholder="이름" type="text" value={name} onChange={handleChangeName} />
      <input placeholder="분류" type="text" value={sort} onChange={handleChangeSort} />
      <input placeholder="주소" type="text" value={address} onChange={handleChangeAddress} />
      <button type="button" onClick={handleClickButton}>등록</button>
    </div>
  );
}
