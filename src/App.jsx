import ListContainer from './Container/List/ListContainer';
import RegisterContainer from './Container/Register/RegisterContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <RegisterContainer />
    </div>
  );
}
