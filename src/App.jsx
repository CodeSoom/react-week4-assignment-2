import { useState } from 'react';

export default function App() {
  const initialState = {
    id: null,
    restaurantName: '',
    lists: [
      { id: 1, name: '김밥천국' },
      { id: 2, name: '김밥지옥' },
    ],
  };

  const [state, setState] = useState(initialState);

  const { restaurantName } = state;

  function handleChange(e) {
    setState({
      ...state,
      restaurantName: e.target.value,
    });
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <form>
        <input
          type="text"
          placeholder="이름"
          value={restaurantName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
