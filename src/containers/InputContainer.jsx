import { useSelector, useDispatch } from 'react-redux';

import NameInput from '../components/NameInput';
import CategoryInput from '../components/CategoryInput';

import { updateName, updateCategory } from '../store/actions';

export default function InputContainer() {
  const { name, category } = useSelector((state) => ({
    name: state.name,
    category: state.category,
  }));

  const dispatch = useDispatch();

  const handleChangeName = (newName) => {
    dispatch(updateName(newName));
  };

  const handleChangeCategory = (newCategory) => {
    dispatch(updateCategory(newCategory));
  };

  return (
    <>
      <NameInput name={name} onChangeName={handleChangeName} />
      <CategoryInput category={category} onChange={handleChangeCategory} />
    </>
  );
}
