import { fireEvent, render } from '@testing-library/react';

import Form from './Form';

test('Form', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  const { getByLabelText, getByText } = render((
    <Form
      name=""
      category=""
      address=""
      handleChangeName={handleChangeName}
      handleChangeCategory={handleChangeCategory}
      handleChangeAddress={handleChangeAddress}
      handleClickAddRestaurant={handleClickAddRestaurant}
    />));

  fireEvent.change(getByLabelText('이름'), { target: { value: '마녀주방' } });
  expect(handleChangeName).toBeCalled();

  fireEvent.change(getByLabelText('분류'), { target: { value: '한식' } });
  expect(handleChangeCategory).toBeCalled();

  fireEvent.change(getByLabelText('주소'), { target: { value: '서울시 강남구' } });
  expect(handleChangeAddress).toBeCalled();

  fireEvent.click(getByText('등록'));
  expect(handleClickAddRestaurant).toBeCalled();
});
