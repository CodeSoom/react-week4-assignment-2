import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Input from './Input';

import {
  setRestuarants,
  changeName,
  changeCategory,
  changeAddress,
} from './actions';

export default function App() {
  const { name, category, address, restaurants } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestuarants(restaurants));
  }, []);

  function handleChangeName(event) {
    dispatch(changeName(event.target.value));
  }
  function handleChangeCategory(event) {
    dispatch(changeCategory(event.target.value));
  }
  function handleChangeAddress(event) {
    dispatch(changeAddress(event.target.value));
  }
  return (
    <div>
      <h1>Restaurants</h1>
      <Input
        name={name}
        category={category}
        address={address}
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
      />
    </div>
  );
}
