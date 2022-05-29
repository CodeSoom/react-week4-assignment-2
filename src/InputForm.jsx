import { useDispatch, useSelector } from 'react-redux';

import { addRestaurantData, changeRestaurantData } from './actions';

import Button from './Button';

import Input from './Input';

export default function InputForm() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeRestaurantData(e.target.name, e.target.value));
  };

  const handleClick = () => {
    dispatch((addRestaurantData()));
  };

  return (
    <>
      <Input
        division="이름"
        data={name}
        inputName="name"
        onChange={handleChange}
      />
      <Input
        division="분류"
        data={category}
        inputName="category"
        onChange={handleChange}
      />
      <Input
        division="주소"
        data={address}
        inputName="address"
        onChange={handleChange}
      />
      <Button onClick={handleClick} />
    </>
  );
}
