import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurant, addRestaurant } from './actions';

import Input from './Input';
import Button from './Button';

export default function TextBox() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));
  const { name, category, address } = restaurant;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateRestaurant(event.target.name, event.target.value));
  };

  const handleClick = () => {
    dispatch((addRestaurant()));
  };
  return (
    <>
      <Input name="name" placeholder="이름" onChange={handleChange} value={name} />
      <Input name="category" placeholder="분류" onChange={handleChange} value={category} />
      <Input name="address" placeholder="주소" onChange={handleChange} value={address} />
      <Button onClick={handleClick} />
    </>
  );
}
