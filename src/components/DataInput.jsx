import { useDispatch } from 'react-redux';

export default function DataInput() {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch({})}>
      등록
    </button>
  );
}
