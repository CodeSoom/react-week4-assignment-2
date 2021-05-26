import { useSelector } from 'react-redux';

import List from './components/List';
import InputBox from './components/InputBox';

export default function App() {
  const { restaurants } = useSelector((state) => state);

  return (
    <>
      <h1>
        Restaurants
      </h1>
      <List restaurants={restaurants} />

      <InputBox name="이름" />
      <InputBox name="분류" />
      <InputBox name="주소" />
    </>
  );
}
