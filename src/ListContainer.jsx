import List from './List';

import restaurants from './fixtures/restaurants';

export default function ListContainer() {
  return (
    <List restaurants={restaurants} />
  );
}
