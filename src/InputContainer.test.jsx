import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderInputContainer() {
    return render(
      <InputContainer
        restaurantsName=""
        category=""
        address=""
        onChange={handleChange}
        onClick={handleClick}
      />,
    );
  }

  useSelector.mockImplementation((selector) => selector({
    restaurantsName: '아비꼬',
    category: '일식',
    address: '포항시',
  }));

  it('renders addButton and restaurantsName, category, address, ', () => {
    const { queryByText, queryByDisplayValue } = renderInputContainer();

    expect(queryByText(/등록/)).not.toBeNull();
    expect(queryByDisplayValue(/아비꼬/)).not.toBeNull();
    expect(queryByDisplayValue(/일식/)).not.toBeNull();
    expect(queryByDisplayValue(/포항시/)).not.toBeNull();
  });

  it('changes name, category, address value', () => {
    const { queryByPlaceholderText } = renderInputContainer();

    fireEvent.change(queryByPlaceholderText(/이름/), {
      target: { value: '안녕하세요' },
    });

    expect(handleChange).toBeCalled();
  });
});
