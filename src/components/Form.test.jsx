import { fireEvent, render } from '@testing-library/react';
import Form from './Form';

test('Form', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClickAdd = jest.fn();

  const { getByLabelText, getByText } = render(<Form />);

  fireEvent.change(getByLabelText('이름'), { target: { value: '마녀주방' } });
  expect(handleChangeName).toBeCalledWith({ target: { value: '마녀주방' } });

  fireEvent.change(getByLabelText('분류'), { target: { value: '한식' } });
  expect(handleChangeCategory).toBeCalledWith({ target: { value: '한식' } });

  fireEvent.change(getByLabelText('주소'), { target: { value: '서울시 강남구' } });
  expect(handleChangeAddress).toBeCalledWith({ target: { value: '서울시 강남구' } });

  fireEvent.click(getByText('등록'));
  expect(handleClickAdd).toBeCalled();
});
