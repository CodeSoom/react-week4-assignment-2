import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  function renderForm() {
    return render((
      <Input
        name="name"
        placeholder="name"
        value=""
        onChange={handleChange}
      />
    ));
  }

  it('인풋을 보여준다', () => {
    const { getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText(/name/)).not.toBeNull();
  });

  it('입력 시 change 이벤트가 발생한다', () => {
    const { getByPlaceholderText } = renderForm();

    fireEvent.change(getByPlaceholderText(/name/), {
      target: { value: 'Hello' },
    });

    expect(handleChange).toBeCalled();
  });
});
