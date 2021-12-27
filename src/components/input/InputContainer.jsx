import { useDispatch } from 'react-redux';
import InputView from './InputView';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(() => event.target.value);
  }

  function handleChangeCategory(event) {
    dispatch(() => event.target.value);
  }

  function handleChangeAddress(event) {
    dispatch(() => event.target.value);
  }

  function handleClickAdd() {
    dispatch(() => {});
  }

  return (
    <InputView
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClickAdd={handleClickAdd}
    />
  );
}
