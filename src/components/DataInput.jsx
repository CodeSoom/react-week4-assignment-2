import { useDispatch, useSelector } from 'react-redux';

import InputBox from './InputBox';
import { addRestaurant } from '../redux/actions';

export default function DataInput() {
  const dispatch = useDispatch();
  const { restaurants, ...infos } = useSelector((state) => state);

  return (
    <>
      <InputBox name="name" />
      <InputBox name="category" />
      <InputBox name="address" />

      <button
        type="button"
        onClick={() => dispatch(addRestaurant(infos))}
      >
        등록
      </button>
    </>
  );
}
