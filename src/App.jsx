import Form from './Form';
import List from './List';

import restaurants from './fixtures/restaurants';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <List restaurants={restaurants} />
      <Form />
    </div>
  );
}
