import { useDispatch, useSelector } from 'react-redux';

import {
  updateData,
  updateInput,
} from './actions';
import RestaurantInfoInput from './Input';

export default function InputContainer() {
  const info = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleChanges(name, value) {
    dispatch(updateInput(name, value));
  }

  function handleClickSaveData() {
    dispatch(updateData());
  }

  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantInfoInput
        onChanges={handleChanges}
        onClick={handleClickSaveData}
        info={info}
      />
    </>
  );
}
