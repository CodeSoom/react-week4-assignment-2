import { fireEvent, render } from '@testing-library/react';
import { updateRestaurantAddress, updateRestaurantCategory, updateRestaurantName } from '../actions/actions';

import InputContainer from '../presentational/InputContainer';

describe('<InputContainer />', () => {
  const handleChange = jest.fn();
  const handleClickAddRestaurant = jest.fn();

  function renderInput() {
    return render(
      <InputContainer />,
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
    expect(getByRole('button', { name: /등록/ })).toBeInTheDocument();
  });

  it('calls handleChange when change input value', () => {
    const { getByRole } = renderInput();

    expect(handleChange).not.toBeCalled();

    fireEvent.change(
      getByRole('textbox', { name: /이름/ }),
      { target: { value: '국밥' } },
    );
    fireEvent.change(
      getByRole('textbox', { name: /분류/ }),
      { target: { value: '국' } },
    );
    fireEvent.change(
      getByRole('textbox', { name: /등록/ }),
      { target: { value: '부산 연제구' } },
    );

    expect(handleChange).toBeCalledTimes(3);
    expect(handleChange).toBeCalledWith(updateRestaurantName('국밥'));
    expect(handleChange).toBeCalledWith(updateRestaurantCategory('국'));
    expect(handleChange).toBeCalledWith(updateRestaurantAddress('부산 연제구'));
  });

  it('calls handleClickAddRestaurant when click "등록" button', () => {
    const { getByRole } = renderInput();

    expect(handleClickAddRestaurant).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: /등록/ }));

    expect(handleClickAddRestaurant).toBeCalled();
  });
});
