import { useSelector, useDispatch } from 'react-redux';

import NameInput from '../components/NameInput';
import CategoryInput from '../components/CategoryInput';
import AddressInput from '../components/AddressInput';

import { updateName, updateCategory, updateAddress } from '../store/actions';

export default function InputContainer() {
  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  const handleChangeName = (newName) => {
    dispatch(updateName(newName));
  };

  const handleChangeCategory = (newCategory) => {
    dispatch(updateCategory(newCategory));
  };

  const handleChangeAddress = (newAddress) => {
    dispatch(updateAddress(newAddress));
  };

  return (
    <>
      <NameInput name={name} onChangeName={handleChangeName} />
      <CategoryInput category={category} onChange={handleChangeCategory} />
      <AddressInput address={address} onChange={handleChangeAddress} />
    </>
  );
}
