import { useSelector } from 'react-redux';
import NameInput from '../components/NameInput';

export default function InputContainer() {
  const { name } = useSelector((state) => ({
    name: state.name,
  }));

  return (
    <NameInput name={name} />
  );
}
