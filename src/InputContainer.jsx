import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant,
  updateAddressText,
  updateCategoryText,
  updateNameText,
} from './actions';

export default function InputContainer() {
  const { nameText, categoryText, addressText } = useSelector((state) => ({
    nameText: state.nameText,
    categoryText: state.categoryText,
    addressText: state.addressText,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateNameText(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategoryText(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddressText(event.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return ((
    <div>
      <input name="name" placeholder="이름" value={nameText} onChange={handleChangeName} />
      <input name="category" placeholder="분류" value={categoryText} onChange={handleChangeCategory} />
      <input name="address" placeholder="주소" value={addressText} onChange={handleChangeAddress} />
      <button type="submit" onClick={handleAddRestaurant}>등록</button>
    </div>
  ));
}
