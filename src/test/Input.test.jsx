import { fireEvent, render } from '@testing-library/react';

import Input from '../presentational/Input';

describe('<Input />', () => {
  const handleChange = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  function renderInput() {
    return render(
      <Input
        name="아웃백"
        category="패밀리레스토랑"
        address="부산 해운대구"
        onChange={handleChange}
        onClick={handleClickAddRestaurant}
      />,
    );
  }
  it('renders inputs, "등록" button', () => {
    const {
      getByRole,
      getByPlaceholderText,
    } = renderInput();

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  it('calls handleChange when change input value', () => {
    const { getAllByRole } = renderInput();

    expect(handleChange).not.toBeCalled();

    getAllByRole('textbox').forEach((textbox) => {
      fireEvent.change(textbox, { target: { value: '123' } });

      expect(handleChange).toBeCalledWith(123);
    });
  });

  it('calls handleClickAddRestaurant when click "등록" button', () => {
    const { getByRole } = renderInput();

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
