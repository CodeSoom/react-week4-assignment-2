import List from './List';
import InputBox from './InputBox';

export default function App() {
  return (
    <>
      <h1>
        Restaurants
      </h1>
      <List restaurants={[]} />

      <InputBox name="이름" />
      <InputBox name="분류" />
      <InputBox name="주소" />
    </>
  );
}
