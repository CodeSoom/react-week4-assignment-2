import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPES } from '../store/actions';

export default function RestaurantForm() {
  const { name } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <form>
      <section>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="이름"
          value={name}
          onChange={({ target: { value } }) => {
            dispatch({
              type: ACTION_TYPES.CHANGE_NAME,
              payload: value,
            });
          }}
        />
      </section>

      <section>
        <label htmlFor="category">분류</label>
        <input type="text" id="category" name="category" placeholder="분류" />
      </section>

      <section>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" name="address" placeholder="주소" />
      </section>

      <section>
        <button type="submit">등록</button>
      </section>
    </form>
  );
}
