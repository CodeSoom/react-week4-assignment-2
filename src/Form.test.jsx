import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function setup(information = {
    name: '',
    classification: '',
    address: '',
  }) {
    return (render(
      <Form
        information={information}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    ));
  }

  const information = {
    name: 'New Name',
    classification: 'New Classification',
    address: 'New Address',
  };

  it('renders text box & button', () => {
    const { getByText, getByPlaceholderText } = setup();

    expect(getByPlaceholderText('이름')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('분류')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('주소')).toHaveAttribute('type', 'text');
    expect(getByText('등록')).not.toBeNull();
  });

  it('renders input to listen to change event', () => {
    const { getAllByRole } = setup();

    const inputs = getAllByRole('textbox');

    expect(handleChange).not.toBeCalled();

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: Object.values(information)[index] } });

      expect(handleChange).toBeCalledWith();
    });
  });

  it('renders button to listen to submit event', () => {
    const { getByRole } = setup(information);

    expect(handleSubmit).not.toBeCalled();

    fireEvent.click(getByRole('button'));

    expect(handleSubmit).toBeCalled();
  });
});
