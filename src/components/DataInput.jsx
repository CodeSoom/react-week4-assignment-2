import { useDispatch, useSelector } from 'react-redux';

import InputBox from './InputBox';
import { addRestaurant } from '../redux/actions';

export default function DataInput() {
  const dispatch = useDispatch();
  const {
    id, name, category, address,
  } = useSelector((state) => state);

  return (
    <>
      <InputBox name="name" />
      <InputBox name="category" />
      <InputBox name="address" />

      <button
        type="button"
        onClick={() => dispatch(
          addRestaurant({
            id, name, category, address,
          }),
        )}
      >
        등록
      </button>
    </>
  );
}
