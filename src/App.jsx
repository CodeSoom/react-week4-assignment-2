import { useSelector } from 'react-redux';

import List from './List';
import InputContainer from './containers/InputContainer';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <h1>Restaurants</h1>
      <List restaurants={restaurants} />
      <InputContainer />
    </div>
  );
}
