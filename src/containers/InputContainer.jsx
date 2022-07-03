import { useSelector, useDispatch } from 'react-redux';

import NameInput from '../components/NameInput';

import updateName from '../store/actions';

export default function InputContainer() {
  const { name } = useSelector((state) => ({
    name: state.name,
  }));

  const dispatch = useDispatch();

  const handleChangeName = (newName) => {
    dispatch(updateName(newName));
  };

  return (
    <NameInput name={name} onChangeName={handleChangeName} />
  );
}
