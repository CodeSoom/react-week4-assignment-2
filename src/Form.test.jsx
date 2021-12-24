import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

test('FormContainer', () => {
  const handleClick = jest.fn();

  // 목적 : 이름, 분류, 주소 input이 각각 존재하는지?
  // handleChange 올바르게 동작하는가?
  // onClick이 호출되는가?
  const { getByText } = render((
    <Form
      onClick={handleClick}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));
  expect(handleClick).toBeCalled();
});
