import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderForm() {
    return render((
      <Form
        name="기존 레스토랑"
        category="기존 분류"
        address="기존 주소"
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { queryByDisplayValue } = renderForm();

    expect(queryByDisplayValue('기존 레스토랑')).not.toBeNull();
    expect(queryByDisplayValue('기존 분류')).not.toBeNull();
    expect(queryByDisplayValue('기존 주소')).not.toBeNull();
  });

  it('calls handleChange', () => {
    const { getByPlaceholderText } = renderForm();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '더조은 참치' },
    });

    expect(handleChange).toBeCalled();

    jest.clearAllMocks();

    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: '일식' },
    });

    expect(handleChange).toBeCalled();

    jest.clearAllMocks();

    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: '압구정' },
    });

    expect(handleChange).toBeCalled();
  });

  it('calls handleClick', () => {
    const { getByText } = renderForm();

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
