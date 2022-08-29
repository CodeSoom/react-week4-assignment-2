import { useDispatch, useSelector } from 'react-redux';

import {
  updateName,
  updateSort,
  updateAddress,
  addRestaurant,
} from './actions';

export default function InputContainer() {
  const { name, sort, address } = useSelector((state) => ({
    name: state.name,
    sort: state.sort,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeSort(event) {
    dispatch(updateSort(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleClickAddRestaurant(event) {
    event.preventDefault();
    dispatch(addRestaurant());
  }

  return (
    <form onSubmit={handleClickAddRestaurant}>
      <input
        type="text"
        value={name}
        placeholder="이름"
        onChange={handleChangeName}
      />
      <input
        type="text"
        value={sort}
        placeholder="분류"
        onChange={handleChangeSort}
      />
      <input
        type="text"
        value={address}
        placeholder="주소"
        onChange={handleChangeAddress}
      />
      <button type="submit">등록</button>
    </form>
  );
}
