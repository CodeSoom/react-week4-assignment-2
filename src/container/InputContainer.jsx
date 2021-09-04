import { useDispatch, useSelector } from 'react-redux';

import {
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
  addRestaurant,
} from '../store/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const { restaurantName, restaurantCategory, restaurantAddress } = useSelector((state) => state);

  const dispatch = useDispatch();

  const Inputs = [{
    ariaLabel: 'restaurantName',
    value: restaurantName,
    name: 'name',
    placeholder: '이름',
    onChange: (value) => dispatch(updateRestaurantName(value)),
  }, {
    ariaLabel: 'restaurantCategory',
    value: restaurantCategory,
    name: 'category',
    placeholder: '분류',
    onChange: (value) => dispatch(updateRestaurantCategory(value)),
  }, {
    ariaLabel: 'restaurantAddress',
    value: restaurantAddress,
    name: 'address',
    placeholder: '주소',
    onChange: (value) => dispatch(updateRestaurantAddress(value)),
  }];

  const handleClick = () => {
    dispatch(addRestaurant());
  };

  return (
    <>
      {Inputs.map(({
        ariaLabel, value, onChange, name, placeholder,
      }) => (
        <Input
          key={ariaLabel}
          ariaLabel={ariaLabel}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
      ))}
      <button
        type="button"
        onClick={handleClick}
      >
        등록
      </button>
    </>
  );
}
