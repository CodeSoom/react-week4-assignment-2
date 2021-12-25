import { useDispatch, useSelector } from 'react-redux';

import {
  updateAddressValue,
  updateCategoryValue,
  updateData,
  updateNameValue,
} from './actions';
import RestaurantInfoInput from './Input';

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
      <RestaurantInfoInput
        onChanges={{ handleChangeNameValue, handleChangeCategroryValue, handleChangeAddressValue }}
        onClick={handleClickSaveData}
        info={{ name, category, address }}
      />
    </>
  );
}
