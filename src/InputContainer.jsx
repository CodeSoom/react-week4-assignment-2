import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant, updateInput,
} from './action';
import Form from './Form';

export default function InputContainer() {
  const { title, sort, location } = useSelector((state) => ({
    title: state.title,
    sort: state.sort,
    location: state.location,
  }));

  const dispatch = useDispatch();

  function handleChangeInput(e) {
    dispatch(updateInput({ name: e.target.name, value: e.target.value }));
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    dispatch(addRestaurant());
  }

  return (
    <div>
      <Form
        title={title}
        sort={sort}
        location={location}
        onChange={handleChangeInput}
        onSubmit={handleSubmitButton}
      />
    </div>
  );
}
