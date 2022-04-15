import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

function renderInputContainer() {
  return render(
    <InputContainer />,
  );
}

describe('InputContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    const { getByPlaceholderText } = renderInputContainer();
    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '김밥헤븐' } });
    expect(handleChange).toBeCalled();
  });
});
