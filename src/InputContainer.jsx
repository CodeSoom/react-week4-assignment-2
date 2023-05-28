import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant, updateInput,
} from './action';

export default function InputContainer() {
  const { title, sort, location } = useSelector((state) => ({
    title: state.title,
    sort: state.sort,
    location: state.location,
  }));

  const dispatch = useDispatch();

  function handleChangeInput(e) {
    dispatch(updateInput({ name: e.target.name, value: e.target.value }));
  }

  function handleClickButton() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <input name="title" placeholder="이름" type="text" value={title} onChange={handleChangeInput} />
      <input name="sort" placeholder="분류" type="text" value={sort} onChange={handleChangeInput} />
      <input name="location" placeholder="주소" type="text" value={location} onChange={handleChangeInput} />
      <button type="button" onClick={handleClickButton}>등록</button>
    </div>
  );
}
