import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import { addNewRestaurant, changeInput } from './store/actions';

export default function FormContainer() {
  const dispatch = useDispatch();
  const { name, category, address } = useSelector(((state) => state.input));

  function handleChangeByName(event) {
    const { name: key, value } = event.target;
    dispatch(changeInput(key, value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addNewRestaurant());
  }

  return (
    <>
      <Form
        name={name}
        category={category}
        address={address}
        onChangeByName={handleChangeByName}
        onSubmit={handleSubmit}
      />
    </>
  );
}
