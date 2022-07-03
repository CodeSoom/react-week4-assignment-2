import { useSelector, useDispatch } from 'react-redux';
import NameInput from '../components/NameInput';

export default function InputContainer() {
  const { name } = useSelector((state) => ({
    name: state.name,
  }));

  const dispatch = useDispatch();

  const handleChangeName = () => {
    dispatch();
  };

  return (
    <NameInput name={name} onChangeName={handleChangeName} />
  );
}
