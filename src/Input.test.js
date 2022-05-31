import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

import restaurant from '../fixtures/restaurant';

describe('Input', () => {
  it('renders', () => {
    const emptyRestaurant = {};

    const { getByPlaceholderText, getByText } = render(<Input restaurant={emptyRestaurant} />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('sets the value and change event', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();

    const { getByDisplayValue, getByText } = render((
      <Input
        restaurant={restaurant}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(getByDisplayValue('마녀 주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('서울시 강남구')).toBeInTheDocument();

    fireEvent.change(getByDisplayValue('마녀 주방'), { target: { value: '시카고 피자' } });
    expect(handleChange).toBeCalled();

    fireEvent.change(getByDisplayValue('한식'), { target: { value: '양식' } });
    expect(handleChange).toBeCalled();

    fireEvent.change(getByDisplayValue('서울시 강남구'), { target: { value: '이태원' } });
    expect(handleChange).toBeCalled();

    fireEvent.click(getByText('등록'));
    expect(handleClick).toBeCalled();
  });
});
