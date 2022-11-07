import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';

import { updateRestaurant, addRestaurant } from './actions';

export default function InputContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateRestaurant(e.target.name, e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addRestaurant());
  }

  return (
    <Input
      name={name}
      category={category}
      address={address}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
