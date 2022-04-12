import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

const onClick = jest.fn();

const renderInput = () => render((
  <Input />
));

describe('Input', () => {
  it('renders 3 inputs', () => {
    const { queryAllByRole } = renderInput();

    expect(queryAllByRole('textbox')).toHaveLength(3);
  });

  it('renders placeholder', () => {
    const { queryByPlaceholderText } = renderInput();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('renders button', () => {
    const { queryByRole } = renderInput();

    expect(queryByRole('button')).not.toBeNull();
  });

  it('listens for click event on add restaurant', () => {
    const { getByText } = renderInput();

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText('등록'));

    expect(onClick).toBeCalled();
  });
});
