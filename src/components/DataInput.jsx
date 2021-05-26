import { useDispatch } from 'react-redux';

import InputBox from './InputBox';

export default function DataInput() {
  const dispatch = useDispatch();
  return (
    <>
      <InputBox name="이름" />
      <InputBox name="분류" />
      <InputBox name="주소" />
      <button type="button" onClick={() => dispatch({})}>
        등록
      </button>
    </>
  );
}
