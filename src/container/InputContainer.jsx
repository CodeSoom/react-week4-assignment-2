import { useDispatch, useSelector } from 'react-redux';

import {
  updateRestaurantField,
  addRestaurant,
} from '../store/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const { name: placeName, category, address } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();

  const Inputs = [{
    ariaLabel: 'restaurantName',
    value: placeName,
    name: 'name',
    placeholder: '이름',
  }, {
    ariaLabel: 'restaurantCategory',
    value: category,
    name: 'category',
    placeholder: '분류',
  }, {
    ariaLabel: 'restaurantAddress',
    value: address,
    name: 'address',
    placeholder: '주소',
  }];

  const onChange = ({ name, value }) => dispatch(updateRestaurantField({ name, value }));

  const onClick = () => dispatch(addRestaurant());

  return (
    <>
      {Inputs.map(({
        ariaLabel, value, name, placeholder,
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
        onClick={onClick}
      >
        등록
      </button>
    </>
  );
}
