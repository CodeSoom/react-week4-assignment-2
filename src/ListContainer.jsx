import List from './List';
import restaurantsFixture from '../__mocks__/Fixture';

export default function ListContainer() {
  return (
    <List
      restaurants={restaurantsFixture}
    />
  );
}
