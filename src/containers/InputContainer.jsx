import { useDispatch, useSelector } from 'react-redux';

import { updateName } from '../redux/actions';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => ({
    name: state.name,
  }));

  const handleUpdateName = ({ value }) => {
    dispatch(updateName({ name: value }));
  };

  return (
    <div>
      <label htmlFor="input-name">이름</label>
      <input
        id="input-name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={(event) => handleUpdateName({ value: event.target.value })}
      />
      <label htmlFor="input-category">분류</label>
      <input
        id="input-category"
        type="text"
        placeholder="분류"
      />
      <label htmlFor="input-address">주소</label>
      <input
        id="input-address"
        type="text"
        placeholder="주소"
      />
      <button type="button">등록</button>
    </div>
  );
}
