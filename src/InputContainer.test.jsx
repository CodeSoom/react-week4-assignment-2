import { render, fireEvent, screen } from '@testing-library/react';
import InputContainer from './InputContainer';

describe('InputContainer', () => {
  const handleAddRestaurant = jest.fn();
  it('renders inputs & button', () => {
    const { container, queryByPlaceholderText, getByText } = render(<InputContainer />);
    screen.debug();
    expect(queryByPlaceholderText('이름'));
    expect(queryByPlaceholderText('분류'));
    expect(queryByPlaceholderText('주소'));
    expect(container).toHaveTextContent('등록');

    expect(handleAddRestaurant).not.toBeCalled();
    fireEvent.click(getByText('등록'));
    expect(handleAddRestaurant).toBeCalled();
  });
});
