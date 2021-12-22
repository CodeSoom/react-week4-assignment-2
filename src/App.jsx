import { useDispatch, useSelector } from 'react-redux';
import {
  updateAddressValue, updateCategoryValue, updateData, updateNameValue,
} from './actions';

export default function App() {
  const {
    name, category, address, data,
  } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
    data: state.data,
  }));
  const dispatch = useDispatch();

  console.log(name, category, address);

  function handleChangeNameValue(event) {
    // console.log(event.target.value)
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
    <div>
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
      <ul>
        {
          data.map((datum) => (
            <li>
              {' '}
              {datum.name}
              {' '}
              |
              {' '}
              {datum.category}
              {' '}
              |
              {' '}
              {datum.address}
              {' '}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
