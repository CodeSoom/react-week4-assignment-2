import { useDispatch, useSelector } from 'react-redux';
import {
  updateAddressValue, updateCategoryValue, updateData, updateNameValue,
} from './actions';

export default function InputContainer() {
  const {
    name, category, address,
  } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));
  const dispatch = useDispatch();

  function handleChangeNameValue(event) {
    dispatch(updateNameValue(event.target.value));
  }
  function handleChangeCategroryValue(event) {
    dispatch(updateCategoryValue(event.target.value));
  }
  function handleChangeAddressValue(event) {
    dispatch(updateAddressValue(event.target.value));
  }
  function handleClickSaveData() {
    dispatch(updateData(name, category, address));
  }

  return (
    <>
      <h1>Restaurants</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="이름"
          id=""
          onChange={handleChangeNameValue}
          value={name}
        />

        <input
          type="text"
          name="category"
          placeholder="분류"
          id=""
          onChange={handleChangeCategroryValue}
          value={category}
        />

        <input
          type="text"
          name="address"
          placeholder="주소"
          id=""
          onChange={handleChangeAddressValue}
          value={address}
        />

        <input
          type="button"
          value="등록"
          onClick={handleClickSaveData}
        />
      </div>
    </>
  );
}
