import { useDispatch, useSelector } from 'react-redux';

import List from './components/List';
import InputBox from './components/InputBox';

export default function App() {
  const { restaurants } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        Restaurants
      </h1>
      <List restaurants={restaurants} />

      <InputBox name="이름" />
      <InputBox name="분류" />
      <InputBox name="주소" />
      <button type="button" onClick={() => dispatch({})}>
        등록
      </button>
    </>
  );
}
