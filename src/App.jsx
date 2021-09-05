import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    restaurants: [],
    name: '',
    category: '',
    address: '',
  });
  const {
    name, category, address, restaurants,
  } = state;

  const handleChange = (inputType) => (event) => {
    setState({
      ...state,
      [inputType]: event.target.value,
    });
  };

  const handleClick = () => {
    const newRestaurant = { name, category, address };

    setState({
      ...state,
      restaurants: [...state.restaurants, newRestaurant],
      name: '',
      category: '',
      address: '',
    });
  };

  return (
    <div>
      <h1>Restaurants</h1>

      <div>
        <input
          name="name"
          type="text"
          placeholder="이름"
          value={name}
          onChange={handleChange('name')}
        />
        <input
          name="category"
          type="text"
          placeholder="분류"
          value={category}
          onChange={handleChange('category')}
        />
        <input
          name="address"
          type="text"
          placeholder="주소"
          value={address}
          onChange={handleChange('address')}
        />
        <button type="button" onClick={handleClick}>
          등록
        </button>
      </div>
    </div>
  );
}
