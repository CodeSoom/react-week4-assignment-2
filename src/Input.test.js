import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders', () => {
    const { getByPlaceholderText, getByText } = render(<Input />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('sets the value and change event', () => {
    const handleNameChange = jest.fn();
    const handleCategoryChange = jest.fn();
    const handleAddressChange = jest.fn();

    const { getByDisplayValue } = render((
      <Input
        name="마녀 주방"
        category="한식"
        address="서울시 강남구"
        onNameChange={handleNameChange}
        onCategoryChange={handleCategoryChange}
        onAddressChange={handleAddressChange}
      />
    ));

    expect(getByDisplayValue('마녀 주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('서울시 강남구')).toBeInTheDocument();

    fireEvent.change(getByDisplayValue('마녀 주방'), { target: { value: '시카고 피자' } });
    expect(handleNameChange).toBeCalled();

    fireEvent.change(getByDisplayValue('한식'), { target: { value: '양식' } });
    expect(handleCategoryChange).toBeCalled();

    fireEvent.change(getByDisplayValue('서울시 강남구'), { target: { value: '이태원' } });
    expect(handleAddressChange).toBeCalled();
  });
});
