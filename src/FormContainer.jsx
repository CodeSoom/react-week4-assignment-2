import { useSelector, useDispatch } from 'react-redux';

import { changeText, addRestaurant } from './store/actions';

import Form from './Form';

export default function FormContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const handleChange = (e) => {
    dispatch(changeText(e.target.name, e.target.value));
  };

  const handleClickAdd = () => {
    dispatch(addRestaurant());
  };

  return (
    <Form
      storeName={name}
      category={category}
      address={address}
      onChange={handleChange}
      onClick={handleClickAdd}
    />
  );
}
