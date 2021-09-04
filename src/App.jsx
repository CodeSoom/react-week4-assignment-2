import { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    name: '',
    classification: '',
    address: '',
  });
  const { name, classification, address } = state;

  const handleChange = (inputType) => (event) => {
    setState({
      ...state,
      [inputType]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        <input
          id="input-name"
          type="text"
          placeholder="이름"
          value={name}
          onChange={handleChange('name')}
        />
        <input
          id="input-classification"
          type="text"
          placeholder="분류"
          value={classification}
          onChange={handleChange('classification')}
        />
        <input
          id="input-address"
          type="text"
          placeholder="주소"
          value={address}
          onChange={handleChange('address')}
        />
      </div>
    </div>
  );
}
